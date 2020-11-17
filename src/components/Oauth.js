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


export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }
    }

    render() {
        const cookie = new Cookies();

        const connect = () => {
            discord
                .connect()
                .then(({ authId }) => {
                    console.log('Sucessfully connected!', authId)
                    cookie.set("auth", true, {path: "/", httpOnly: true, secure: true});
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
                    cookie.get("auth") == undefined ?
                        <button onClick={connect}>Retrieve your Discord profile</button>
                        :
                        <button disabled>Connected as {this.state.username}</button>
                }
            </div>
        )
    }
}
