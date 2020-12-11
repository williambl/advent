import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import Window from '../../components/Window'

export default function Challenge8(props) {
    return (<ChallengeDataProvider><Challenge8Inner /></ChallengeDataProvider>)
}

function Challenge8Inner(props) {
    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const [value, setValue] = useState("")

    return (
        <Window width={550} height={260} title={"Challenge #8" + (isComplete(7) ? " Complete!" : "")}>

            <p>Ciphers are fun: Julius Caesar used one in which he replaced each letter with one a fixed number of letters down the alphabet - for example, a Caesar cipher with a shift of two would replace A with C, B with D, etc.</p>

            <p>Here is some text which has been encoded with a Caesar cipher with a shift of somewhere between 10 and 14. What does it say?</p>

            <pre>
                n pnrfne pvcure jvgu n fuvsg bs 13 unf n fcrpvny anzr: ebg13. cbttref.
            </pre>

            <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end", marginTop: "10px"}}>
                <input onChange={event => setValue(event.target.value.toLowerCase())} placeholder="Your answer" style={{borderRadius: "0"}} />
                
                <button style={{marginLeft: "auto"}} disabled={isComplete(7) ? true : null} onClick={() => answerChallenge(7, value)}>{isComplete(7) ? "Complete!" : "Submit"}</button>
            </fieldset>

        </Window>
    )
}
