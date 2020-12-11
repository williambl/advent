import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'
import smolDog from '../../assets/smol-dog.png'

export default function Challenge10(props) {
    return (<ChallengeDataProvider><Challenge10Inner /></ChallengeDataProvider>)
}

function Challenge10Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [value, setValue] = useState("")

    return (
        <Window width={400} title={"Challenge #10" + (isComplete(9) ? " Complete!" : "")}>

            <div style={{display: "flex", flexDirection: "row"}} >
                <div className="inset" style={{width: "max-content", padding: "2px", height: "max-content", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px", marginLeft: "0"}}><img src={smolDog} alt="a very adorable little dog" /></div>

                <fieldset style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <input onChange={event => setValue(event.target.value.toLowerCase())} placeholder="Describe in one word." style={{borderRadius: "0"}} />

                    <button style={{marginLeft: "5px"}} disabled={isComplete(9) ? true : null} onClick={() => answerChallenge(9, value)}>{isComplete(9) ? "Complete!" : "Submit"}</button>
                </fieldset>
            </div>

        </Window>
    )
}
