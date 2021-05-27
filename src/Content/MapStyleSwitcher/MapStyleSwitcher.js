import React from "react"
import classes from "./MapStyleSwitcher.module.css"
import SwampColoredElement from "./SwampColoredElement/SwampColoredElement";
import BlueElement from "./BlueElement/BlueElement";
import OrangeElement from "./OrangeElement/OrangeElement";

const MapStyleSwitcher = () => (
    <div className={classes.ContainerMapSwitcher}>
        <SwampColoredElement/>
        <BlueElement/>
        <OrangeElement/>
    </div>
)

export default MapStyleSwitcher