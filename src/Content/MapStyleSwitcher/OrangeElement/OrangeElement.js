import React from "react"
import classes from "./OrangeElement.module.css"
import transport from "../../../assets/Transport.svg"

const BlueElement = () => (
    <div className={classes.OrangeRectangle}>
        <img src={transport}
             className={classes.IconTransport}
             alt="Map"/>
        <p className={classes.TransportParagraph}>Schedule of public transport that is near you</p>
    </div>
)

export default BlueElement