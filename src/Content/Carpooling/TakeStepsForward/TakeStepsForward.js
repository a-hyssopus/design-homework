import React from "react"
import takeSteps from "../../../assets/mocku@3x.webp"
import classes from "./TakeStepsForward.module.css"

const TakeStepsForward = () => (
    <>
        <img className={classes.StepsForward}
             src={takeSteps}/>
        <div className={classes.Gradient}/>
    </>
)

export default TakeStepsForward