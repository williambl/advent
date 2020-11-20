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
            userInfo: {},
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
        const connect = ()=>{
            const cookies = new Cookies();
            discord
                .connect()
                .then(({ authId }) => {
                    console.log('Sucessfully connected!', authId)
                    cookies.set("auth", authId, {path: "/", secure: true});
                    discord
                        .auth(authId)
                        .get("/users/@me")
                        .then(response => response.json())
                        .then(json => {
                            this.setState({
                                userInfo: json,
                                isLoggedIn: true
                            });
                        })
                })
                .catch(console.error)       
        }

        const props = { userInfo: this.state.userInfo, isLoggedIn: this.state.isLoggedIn, connectFunc: connect };
        const modifiedChildren = React.Children.map(this.state.children, child => {
            return React.isValidElement(child) ?
                React.cloneElement(child, props)
                :
                child
        });
        return modifiedChildren
    }
}

export function Auth (props) {
    return (
        <div>
            {
                props.isLoggedIn ?
                    <button>Connected as {props.userInfo.username}</button>
                    :
                    <button onClick={props.connectFunc}>Retrieve your Discord profile</button>
            }
        </div>
    )
}

