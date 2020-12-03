import React, { useState } from 'react'
import { AuthProvider } from '../../components/Oauth'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'

export default function Challenge3(props) {
    return (<AuthProvider><ChallengeDataProvider><Challenge3Inner /></ChallengeDataProvider></AuthProvider>)
}

function Challenge3Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [value, setValue] = useState("")

    return (
        <Window width={400} height={150} title={"Challenge #3" + (isComplete(2) ? " Complete!" : "")}>
            <a href="https://jstris.jezevec10.com/?play=1&rule=2">
                Click this link to play a <em>totally normal</em> game of Tetris.
            </a>

            <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end", marginTop: "1rem"}}>
                <legend>How many different pieces are there in this variant of Tetris?</legend>
                <div className="field-row" style={{width: "200px"}}>
                    <label for="range">2</label>
                    <input id="range" type="range" min="2" max="64" onChange={event => setValue(event.target.value)} />
                    <label for="range">64</label>
                </div>

                <button style={{marginLeft: "20px"}} onClick={() => answerChallenge(2, value)}>{isComplete(2) ? "Complete!" : "Submit "+value}</button>
            </fieldset>

        </Window>
    )
}
