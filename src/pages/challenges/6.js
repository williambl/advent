import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'
import qrCode from '../../assets/challenge6code.png'

export default function Challenge6(props) {
    return (<ChallengeDataProvider><Challenge6Inner /></ChallengeDataProvider>)
}

function Challenge6Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [answer, setAnswer] = useState("")
    const [showSecondPart, setShowSecondPart] = useState("")

    return (
        <Window width={400} height={showSecondPart ? 430 : 360} title={"Challenge #6" + (isComplete(5) ? " Complete!" : "")}>

            <p>Here is a QR code:</p>

            <div className="inset" style={{width: "max-content", padding: "2px", height: "max-content", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px", marginLeft: "0"}}><img src={qrCode} alt="aHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUQ==" /></div>

            <p>(Scanning this, you should get something with two equals signs at the end)</p>

            <hr />

            {
                !showSecondPart ? <button onClick={() => setShowSecondPart(true)}>Next</button> :
                    <div>

                        <p>This text is encoded in the same way that <strong>Challenge #2</strong> was.</p>

                        <p>Decode it and enter it into your browser's address bar.</p>

                        <p>Who made the thing that you're now looking at?</p>

                        <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                            <input onChange={event => setAnswer(event.target.value.toLowerCase())} placeholder="Your answer" style={{borderRadius: "0"}} />

                            <button style={{marginLeft: "auto"}} disabled={isComplete(5) ? true : null} onClick={() => answerChallenge(5, answer)}>{isComplete(5) ? "Complete!" : "Submit"}</button>
                        </fieldset>

                    </div>
            }

        </Window>
    )
}
