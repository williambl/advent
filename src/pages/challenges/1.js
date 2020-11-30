import React from 'react'
import { AuthProvider } from '../../components/Oauth'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'

export default function Challenge1(props) {
    return (<AuthProvider><ChallengeDataProvider><Challenge1Inner /></ChallengeDataProvider></AuthProvider>)
}

function Challenge1Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    if (props.isLoggedIn && !isComplete(0))
        answerChallenge(0, 0)

    return (
        <Window width={300} height={150} title={"Challenge #1" + (isComplete(0) ? " Complete!" : "")}>
            <p>
                Your first challenge is pretty easy: just click the log in button.
            </p>

            <button onClick={props.connectFunc}>{props.isLoggedIn ? "Successfully logged in!" : "Log in"}</button>
        </Window>
    )
}
