import React from 'react';
import Draggable from "react-draggable";

export default function Window(props) {

    const settings = {
        width: props.width || "100%",
        height: props.height || "100%",
        onMinimise: props.onMinimise || function(){},
        onMaximise: props.onMaximise || function(){},
        onClose: props.onClose || function(){},
        draggable: props.draggable === undefined ? true : props.draggable,
        title: props.title || "",
        style: props.style || ""
    }
    return (
        <Draggable handle=".title-bar" disabled={!settings.draggable}>
            <div style={Object.assign({ width: settings.width, height: settings.height }, settings.style)} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">{settings.title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onClick={settings.onMinimise}/>
                        <button aria-label="Maximize" onClick={settings.onMaximise}/>
                        <button aria-label="Close" onClick={settings.onClose}/>
                    </div>
                </div>

                <div className="window-body">
                    { props.children }
                </div>
            </div>
        </Draggable>

    )
}
