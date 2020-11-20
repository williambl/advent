import React, { Component } from 'react';
import Pizzly from 'pizzly-js';
import Cookies from "universal-cookie";

// Pizzly environment variables, make sure to replace
// these with those of your own Pizzly instance
const PIZZLY_HOSTNAME = "pizzly-advent.herokuapp.com";
const PIZZLY_PUBLISHABLE_KEY = "6282AB309732A37D2F1";
const DISCORD_SETUP_ID = "2237700c-3c3d-4035-9acf-bcbbd2a1d2b0";

const pizzly = new Pizzly({
    host: PIZZLY_HOSTNAME,
    publishableKey: PIZZLY_PUBLISHABLE_KEY
})

const discord = pizzly.integration('discord', {
    setupId: DISCORD_SETUP_ID
})

export class AuthProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: undefined,
            isLoggedIn: false,
            children: props.children
        }
    }

    componentDidMount() {
        const cookie = new Cookies();

        const authId = cookie.get("auth")
        if (authId != undefined) {
            discord
                .auth(authId)
                .get("/users/@me")
                .then(response => response.json())
                .then(json => this.setState({
                    userInfo: json,
                    isLoggedIn: true
                }))
                .catch(console.error)
        }
    }

    render() {
        const props = { userInfo: this.state.userInfo, isLoggedIn: this.state.isLoggedIn };
        const modifiedChildren = React.Children.map(this.state.children, child => {
            return React.isValidElement(child) ?
                React.cloneElement(child, props)
            :
                child
        });
        return modifiedChildren
    }
}

export class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: this.props.userInfo,
            isLoggedIn: this.props.isLoggedIn
        }
    }

    render() {
        const cookie = new Cookies();

        const connect = () => {
            discord
                .connect()
                .then(({ authId }) => {
                    console.log('Sucessfully connected!', authId)
                    cookie.set("auth", authId, {path: "/", secure: true});
                    discord
                        .auth(authId)
                        .get("/users/@me")
                        .then(response => response.json())
                        .then(json => {
                            this.setState({
                                username: json.username
                            });
                        })
                })
                .catch(console.error)
        }


        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        <button disabled>Connected as {this.state.userInfo.username}</button>
                        :
                        <button onClick={connect}>Retrieve your Discord profile</button>
                }
            </div>
        )
    }
}

