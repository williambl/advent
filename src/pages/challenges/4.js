import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'

export default function Challenge4(props) {
    return (<ChallengeDataProvider><Challenge4Inner /></ChallengeDataProvider>)
}

function Challenge4Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [value, setValue] = useState("")

    return (
        <Window width={400} height={150} title={"Challenge #4" + (isComplete(3) ? " Complete!" : "")}>
            <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                <legend><strong>PLEASE ENTER THE PASSWORD TO CONTINUE</strong></legend>

                <input type="password" onChange={event => setValue(event.target.value)} placeholder="Password" style={{borderRadius: "0"}} />
                
                <button style={{marginLeft: "5px", marginRight: "5px"}} onClick={() => alert("Your password is incorrect.")}>Hint</button>

                <button style={{marginLeft: "auto"}} disabled={isComplete(3) ? true : null} onClick={() => answerChallenge(3, value)}>{isComplete(3) ? "Complete!" : "Submit"}</button>
            </fieldset>

        </Window>
    )
}
