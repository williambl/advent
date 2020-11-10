import React, { Component } from 'react';
import Pizzly from 'pizzly-js';

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
            profile: undefined
        }
    }

    render() {
        const connect = () => {
            discord
                .connect()
                .then(({ authId }) => {
                    console.log('Sucessfully connected!', authId)
                    fetchProfile(authId)
                })
                .catch(console.error)
        }


        const fetchProfile = async (authId) => {
            await discord
                .auth(authId)
                .get("/users/@me")
                .then((response) => response.json())
                .then((json) => this.setState({profile: json}));
        };

        return (
            <div>
                <button onClick={connect}>Retrieve your Discord profile</button>
                {this.state.profile && <p> {JSON.stringify(this.state.profile)} </p>}
            </div>
        )
    }
}
