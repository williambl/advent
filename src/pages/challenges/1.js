import React from 'react'
import { AuthProvider } from '../../components/Oauth'
import { answerChallenge, challengeStata } from '../../utils'
import Window from '../../components/Window'

export default function Challenge1(props) {
    <AuthProvider><Challenge1Inner /></AuthProvider>
}

function Challenge1Inner(props) {
    if (props.isLoggedIn && !challengeStata[0]) answerChallenge(0, 0)

    return (
        <Window width={600} height={300} title={"Challenge #1" + challengeStata[0]}>
            <p>
                Your first challenge is pretty easy: just click the log in button.
            </p>

            <label>{props.isLoggedIn ? "Successfully logged in!" : "Log in"}</label>
        </Window>

    )
}
