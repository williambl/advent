import React, { Component } from "react";
import Window from "../components/Window";
import { isChallengeReady } from "../utils"
import LinkButton from "../components/LinkButton"

const challengeDescriptions = new Array(25).fill([])

const challengeImages = new Array(25).fill("https://cdn.discordapp.com/avatars/252528045330661378/a47168a6a60776d30e84d88ea3c60906.png")

//temporary until i've written them all
challengeDescriptions[0] = ["Just log in!"]
challengeDescriptions[1] = ["bleh."]
challengeDescriptions[2] = ["teeeeeest"]
challengeDescriptions[3] = ["i cba to write descriptions for the rest"]

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
                    <LinkButton style={{flex: "0 1 auto", width: "80px", height: "80px", backgroundImage: "URL(\""+challengeImages[id-1]+"\")", backgroundSize: "contain", filter: isChallengeReady(id) ? "" : "saturate(0%)"}} disabled={ isChallengeReady(id) ? false : true } to={ isChallengeReady(id) ? "/challenge/"+id : "#"}/>
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
