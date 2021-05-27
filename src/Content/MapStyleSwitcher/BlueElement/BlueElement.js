import React from "react"
import classes from "./BlueElement.module.css"
import traffic from "../../../assets/Icon-traffic.svg"

const BlueElement = () => (
    <div className={classes.BlueRectangle}>
        <img src={traffic}
             className={classes.TrafficLight}
             alt="Map"/>
        <p className={classes.TrafficParagraph}>Real-time traffic date</p>
    </div>
)

export default BlueElement