import React, { useState } from 'react'
import { answerChallenge } from '../../utils'
import ChallengeDataProvider from '../../components/ChallengeDataProvider'
import { AuthProvider } from '../../components/Oauth'
import Window from '../../components/Window'

export default function Challenge13(props) {
    return (<AuthProvider><ChallengeDataProvider><Challenge13Inner /></ChallengeDataProvider></AuthProvider>)
}

const AZazRegex = new RegExp("[A-Za-z]")

function Challenge13Inner(props) {

    const isComplete = (id) => {
        if (props.completedChallenges === undefined)
            return false
        else return props.completedChallenges.includes(id)
    }

    const turnToNumber = (string) => {
        let number = ""
        for (let i = 0; i < string.length; i++) {
            if (AZazRegex.test(string.charAt(i)))
                number += (string.toLowerCase().charCodeAt(i)-96).toString()
        }
        console.log(number)
        return Number.parseInt(number)
    }

    const [username, setUsername] = useState(0)
    const [usernameSubmitted, setUsernameSubmitted] = useState("")

    const [answer, setAnswer] = useState(0)

    return (
        <Window width={400} height="maxContent" title={"Challenge #13" + (isComplete(12) ? " Complete!" : "")}>
            <p>
                Any letter can be represented by a number if you start off with A = 1 and move up one number for each letter, ending with Z = 26.
            </p>

            <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end", marginTop: "1rem"}}>
                <legend>If you do this to your username, what do you get?</legend>
                <input type="number" min="0" onChange={event => setUsername(Number.parseInt(event.target.value))} style={{borderRadius: "0"}}/>
                <button style={{marginLeft: "20px"}} disabled={usernameSubmitted === "complete" ? true : null} onClick={() => {if (username === turnToNumber(props.userInfo.username)) setUsernameSubmitted("correct"); else setUsernameSubmitted("incorrect")}}>{usernameSubmitted === "correct" ? "Complete!" : usernameSubmitted === "incorrect" ? "Incorrect!" : "Submit"}</button>
            </fieldset>

            <hr />

            {
                usernameSubmitted !== "correct" ? null :
                    <div>

                        <p>Well done! Now try this:</p>

                        <p>Turn</p>
                        <pre>hellothere</pre>
                        <p>into a number, then turn</p>
                        <pre>boldone</pre>
                        <p>into a number, then add the two numbers together.</p>

                        <fieldset style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                            <input type="number" onChange={event => setAnswer(event.target.value)} placeholder="Your answer" style={{borderRadius: "0"}} />

                            <button style={{marginLeft: "auto"}} disabled={isComplete(12) ? true : null} onClick={() => answerChallenge(12, answer)}>{isComplete(12) ? "Complete!" : "Submit"}</button>
                        </fieldset>

                    </div>
            }

        </Window>
    )
}
