import React from "react"
import classes from "./DriverPassenger.module.css"
import group from "../../../assets/Group 266@3x.webp";

const DriverPassenger = () => {
    return (<>
        <p className={classes.SetRoute}>Set your route, time and available seats</p>
        <img src={group}
             className={classes.Group}
             alt="Map with cars"/>
    </>)
}

export default DriverPassenger