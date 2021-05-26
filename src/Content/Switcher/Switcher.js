import React from "react"
import classes from "./Switcher.module.css"
import PassengerDriver from "./PassengerDriver/PassengerDriver";
import ParagraphMap from "./ParagraphMap/ParagraphMap";

const Switcher = () => (
    <div className={classes.Switch}>
        <div className={classes.Wrapper}>
        <PassengerDriver/>
        <ParagraphMap/>
    </div>
    </div>
)

export default Switcher