import React, {useState} from "react"
import classes from "./Switcher.module.css"
import PassengerDriver from "./PassengerDriver/PassengerDriver";
import ParagraphMap from "./ParagraphMap/ParagraphMap";
import DriverPassenger from "./DriverPassenger/DriverPassenger";

const Switcher = ({passengerClicked, setPassengerClicked}) => {

    let content;
    if (passengerClicked) {
        content = <ParagraphMap/>
    } else {
        content = <DriverPassenger/>

    }

    return (
        <div id="rideDrive" className={classes.Switch}>
            <div className={classes.Wrapper}>
                <PassengerDriver
                    passengerClicked={passengerClicked}
                    setPassengerClicked={setPassengerClicked}/>
                {content}
            </div>
        </div>
    )
}

export default Switcher