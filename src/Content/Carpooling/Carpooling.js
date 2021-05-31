import React from "react"
import Moto from "./Moto/Moto";
import TakeStepsForward from "./TakeStepsForward/TakeStepsForward";
import classes from "./Carpooling.module.css"

const Carpooling = ({ width }) => (
    <div className={classes.Carpooling}
         id="now">
        <Moto width={width}/>
        <TakeStepsForward/>
    </div>
)

export default Carpooling