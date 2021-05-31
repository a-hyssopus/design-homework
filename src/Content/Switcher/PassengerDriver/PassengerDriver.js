import React from "react"
import classes from "./PassengerDriver.module.css"

const PassengerDriver = ({ passengerClicked, setPassengerClicked }) => {
    const classNamesPassenger = passengerClicked ?
        classes.Active : classes.NotActive

    const classNamesDriver = passengerClicked ?
        classes.NotActive : classes.Active

    return (
        <div className={classes.Container}>
            <div className={classes.PassengerDriverContainer}>
                <button onClick={() => setPassengerClicked(true)} className={classNamesPassenger}>Passenger</button>
                <button onClick={() => setPassengerClicked(false)} className={classNamesDriver}>Driver</button>
            </div>
        </div>
    )
}

export default PassengerDriver