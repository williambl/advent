import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'

export default function Challenge9(props) {
    return (<ChallengeDataProvider><Challenge9Inner /></ChallengeDataProvider>)
}

function Challenge9Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [value, setValue] = useState("")

    return (
        <Window width={600} height={180} title={"Challenge #9" + (isComplete(8) ? " Complete!" : "")}>

            <p>Last challenge involved a Caesar cipher with a shift of 13. Of course, you can use other shifts too.</p>

            <p>Here is some text which has been encoded with a Caesar cipher with an unknown value. What does it say?</p>

            <pre>
                kvmjvt dbftbs't ifjs, bvhvtuvt, vtfe b dbftbs djqifs xjui b tijgu pg 1, mjlf uijt!
            </pre>

            <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end", marginTop: "10px"}}>
                <input onChange={event => setValue(event.target.value.toLowerCase())} placeholder="Your answer" style={{borderRadius: "0"}} />
                
                <button style={{marginLeft: "auto"}} disabled={isComplete(8) ? true : null} onClick={() => answerChallenge(8, value)}>{isComplete(8) ? "Complete!" : "Submit"}</button>
            </fieldset>

        </Window>
    )
}
