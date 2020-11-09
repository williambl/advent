import React, { Component } from "react";
import Window from "../components/Window";

export default class Calendar extends Component {
    render() {
        const windowList = []
        for (let y=0; y <= 4; y++) for (let x=1; x <= 5; x++) {
            const id = y*5 + x
            windowList.push(
                <Window title={id} height={"8em"} width={"20%"} draggable={false} style={{flex: "1 0 auto"}}>
                    <p>Challenge {id}</p>
                    <button id={"open"+id}>Open</button>
                </Window>
            )
        }

        return (
            <div style={{"flex-wrap": "wrap", display: "flex" }}>
                {windowList}
            </div>
        )
    }
}
