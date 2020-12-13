import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'

export default function Challenge12(props) {
    return (<ChallengeDataProvider><Challenge12Inner /></ChallengeDataProvider>)
}

function Challenge12Inner(props) {

    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [value, setValue] = useState(0)

    return (
        <Window width={400} height={120} title={"Challenge #12" + (isComplete(11) ? " Complete!" : "")}>
            <p>
                The answer is somewhere here...
            </p>

            <p style={{display: "none"}}>The answer is 7</p>

            <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end", marginTop: "1rem"}}>
                <legend>What's the hidden answer?</legend>
                <div className="field-row" style={{width: "200px"}}>
                    <label for="range">0</label>
                    <input id="range" type="range" min="0" max="12" onChange={event => setValue(event.target.value)} />
                    <label for="range">12</label>
                </div>

                <button style={{marginLeft: "20px"}} disabled={isComplete(11) ? true : null} onClick={() => answerChallenge(11, value)}>{isComplete(11) ? "Complete!" : "Submit "+value}</button>
            </fieldset>

        </Window>
    )
}
