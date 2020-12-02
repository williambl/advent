import React from 'react'
import { AuthProvider } from '../../components/Oauth'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'

export default function Challenge2(props) {
    return (<AuthProvider><ChallengeDataProvider><Challenge2Inner /></ChallengeDataProvider></AuthProvider>)
}

function Challenge2Inner(props) {

    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    return (
        <Window width={400} height={300} title={"Challenge #2" + (isComplete(1) ? " Complete!" : "")}>
            <p>
                Your second challenge is a bit more difficult - what could this mean?
            </p>

            <pre>
                aGF2ZSB5b3UgdHJpZWQgdHVybmluZyBpdCBvZmYgYW5kIG9uIGFnYWlu
            </pre>

            <div style={{marginTop: "20px"}}>
            {
                isComplete(1) ? <p>Complete!</p> : <input onChange={event => answerChallenge(1, event.target.value)} placeholder="Your answer" style={{borderRadius: "0"}} />
            }
        </div>

        </Window>
    )
}
