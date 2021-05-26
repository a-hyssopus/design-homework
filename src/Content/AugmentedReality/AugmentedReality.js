import React from "react"
import backgroundImage from "../../../src/assets/container@3x.webp"
import phoneImage from ""
import classes from "./AugmentedReality.module.css"

const AugmentedReality = () => (
    <div className={classes.AugmentedReality}>
        <img src={backgroundImage}
             alt="Background Image"
             className={classes.Background}/>
        <p className={classes.Paragraph}>Augmented Reality</p>
    </div>
)

export default AugmentedReality