import React from "react"
import Moto from "./Moto/Moto";
import TakeStepsForward from "./TakeStepsForward/TakeStepsForward";
import classes from "./Carpooling.module.css"

const Carpooling = () => (
    <div className={classes.Carpooling}>
        <Moto/>
        <TakeStepsForward/>
    </div>
)

export default Carpooling