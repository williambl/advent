import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'
import cipherText from '../../assets/challenge7text.png'

export default function Challenge7(props) {
    return (<ChallengeDataProvider><Challenge7Inner /></ChallengeDataProvider>)
}

function Challenge7Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [value, setValue] = useState("")

    return (
        <Window width={400} height={150} title={"Challenge #7" + (isComplete(6) ? " Complete!" : "")}>

            <p>Another different alphabet for you to decipher:</p>

            <div className="inset" style={{width: "max-content", padding: "2px", height: "max-content", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px", marginLeft: "0"}}><img src={cipherText} alt="the sound that pigs make, repeated." /></div>

            <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                <input onChange={event => setValue(event.target.value.toLowerCase())} placeholder="Your answer" style={{borderRadius: "0"}} />
                
                <button style={{marginLeft: "auto"}} disabled={isComplete(6) ? true : null} onClick={() => answerChallenge(6, value)}>{isComplete(6) ? "Complete!" : "Submit"}</button>
            </fieldset>

        </Window>
    )
}
