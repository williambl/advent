import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'
import cipherText from '../../assets/challenge5text.png'

export default function Challenge5(props) {
    return (<ChallengeDataProvider><Challenge5Inner /></ChallengeDataProvider>)
}

function Challenge5Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [value, setValue] = useState("")

    return (
        <Window width={400} height={150} title={"Challenge #5" + (isComplete(4) ? " Complete!" : "")}>

            <p>What does this text mean?</p>

            <div className="inset" style={{width: "max-content", padding: "2px", height: "max-content", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px", marginLeft: "0"}}><img src={cipherText} alt="ᓭ⍑ᔑ∷!¡リᒷᓭᓭ ╎⍊" /></div>

            <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                <input onChange={event => setValue(event.target.value.toLowerCase())} placeholder="Your answer" style={{borderRadius: "0"}} />
                
                <button style={{marginLeft: "auto"}} disabled={isComplete(4) ? true : null} onClick={() => answerChallenge(4, value)}>{isComplete(4) ? "Complete!" : "Submit"}</button>
            </fieldset>

        </Window>
    )
}
