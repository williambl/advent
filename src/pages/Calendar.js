import React, { Component } from "react";
import Window from "../components/Window";
import { isChallengeReady } from "../utils"
import LinkButton from "../components/LinkButton"

import lockIcon from '../assets/Lock-icon.png'
import keyIcon from '../assets/key-icon.png'
import calculatorIcon from '../assets/calculator-icon.png'
import joystickIcon from '../assets/joystick-icon.png'
import keyIcon2 from '../assets/key-icon-2.png'
import sgaIcon from '../assets/challenge5-icon.png'
import cdIcon from '../assets/cd-icon.png'
import pigpenIcon from '../assets/pigpen-icon.png'
import caesarIcon from '../assets/caesar-icon.png'

const challengeDescriptions = [
    ["Just log in!"],
    ["This one's pretty base-ic"],
    ["Good at stacking?"],
    ["Take a hint."],
    ["Sorry, I don't speak enchantment table"],
    ["A two-parter"],
    ["Stuck in a (pig)pen"],
    ["Pretty ROT-ten"],
    ["Caesar part 2?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"],
    ["?"]
]

const challengeImages = [
    keyIcon,
    calculatorIcon,
    joystickIcon,
    keyIcon2,
    sgaIcon,
    cdIcon,
    pigpenIcon,
    caesarIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
    lockIcon,
]

export default class Calendar extends Component {
    render() {
        const entries = []
        for (let y=0; y <= 4; y++) for (let x=1; x <= 5; x++) {
            const id = y*5 + x
            entries.push(
                <fieldset style={{minHeight: "3em", width: "20%", flex: "1 0 auto", marginBottom: "10px", display: "flex", alignItems: "center"}}>
                    <legend>Challenge #{id}</legend>
                    <ul className="tree-view" style={{margin: "10px", width: "60%", height: "100%", flex: "0 1 auto"}}>
                        {challengeDescriptions[id-1].map((it) => <li>{it}</li>)}
                    </ul>
                    <LinkButton style={{flex: "0 1 auto", width: "80px", height: "80px", backgroundImage: "URL(\""+challengeImages[id-1]+"\")", backgroundSize: "auto", backgroundRepeat: "no-repeat", backgroundPosition: "center", filter: isChallengeReady(id) ? "" : "saturate(0%)", imageRendering: "crisp-edges"}} disabled={ isChallengeReady(id) ? false : true } to={ isChallengeReady(id) ? "/challenge/"+id : "#"}/>
                </fieldset>
            )
        }

        return (
            <Window draggable={false} title="Advent Calendar" style={{width: "auto"}}>
                <div style={{"flex-wrap": "wrap", display: "flex" }}>
                    {entries}
                </div>
            </Window>
        )
    }
                }
