import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'
import cipherText from '../../assets/challenge11text.png'

export default function Challenge11(props) {
    return (<ChallengeDataProvider><Challenge11Inner /></ChallengeDataProvider>)
}

function Challenge11Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [value, setValue] = useState("")

    return (
        <Window width={400} height={200} title={"Challenge #11" + (isComplete(10) ? " Complete!" : "")}>

            <p>There's some text in this image:</p>

            <div className="inset" style={{width: "max-content", padding: "2px", height: "max-content", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px", marginLeft: "0"}}><img src={cipherText} alt="it says 'hello'" /></div>

            <p>(You can download the image by right clicking and pressing 'save image')</p>

            <p>You should be able to find the hidden text with any image editor :)</p>

            <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                <input onChange={event => setValue(event.target.value.toLowerCase())} placeholder="Your answer" style={{borderRadius: "0"}} />
                
                <button style={{marginLeft: "auto"}} disabled={isComplete(10) ? true : null} onClick={() => answerChallenge(10, value)}>{isComplete(10) ? "Complete!" : "Submit"}</button>
            </fieldset>

        </Window>
    )
}
