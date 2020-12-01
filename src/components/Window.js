import React, { Component } from 'react';
import Draggable from "react-draggable";

export default class Window extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: props.width || "100%",
            height: props.height || "100%",
            onMinimise: props.onMinimise || function(){},
            onMaximise: props.onMaximise || function(){},
            onClose: props.onClose || function(){},
            draggable: props.draggable === undefined ? true : props.draggable,
            children: props.children,
            title: props.title || "",
            style: props.style || ""
        }
    }

    render() {
        return (
            <Draggable handle=".title-bar" disabled={!this.state.draggable}>
                <div style={Object.assign({ width: this.state.width, height: this.state.height }, this.state.style)} className="window">
                    <div className="title-bar">
                        <div className="title-bar-text">{this.state.title}</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize" onClick={this.state.onMinimise}/>
                            <button aria-label="Maximize" onClick={this.state.onMaximise}/>
                            <button aria-label="Close" onClick={this.state.onClose}/>
                        </div>
                    </div>

                    <div className="window-body">
                        { this.state.children }
                    </div>
                </div>
            </Draggable>

        )
    }
}
