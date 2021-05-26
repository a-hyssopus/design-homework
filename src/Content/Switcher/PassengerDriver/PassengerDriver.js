import React from "react"
import classes from "./PassengerDriver.module.css";

const PassengerDriver = () => (
    <div className={classes.Container}>
    <div className={classes.PassengerDriverContainer}>
        <button className={classes.Passenger}>Passenger</button>
        <button className={classes.Driver}>Driver</button>
    </div>
        <p className={classes.Driving}>See who's driving and ask to join</p>
    </div>
)

export default PassengerDriver