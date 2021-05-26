import React from "react"
import classes from "./Switcher.module.css"
import PassengerDriver from "./PassengerDriver/PassengerDriver";

const Switcher = () => (
    <div className={classes.Switch}>
        <div className={classes.bgContainer}>
        <PassengerDriver/>
    </div>
    </div>
)

export default Switcher