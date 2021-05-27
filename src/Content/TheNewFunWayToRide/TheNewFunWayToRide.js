import React from "react"
import funWay from "../../assets/the@3x.webp"
import classes from "./TheNewFunWayToRide.module.css"

const TheNewFunWayToRide = () => (
    <div className={classes.FunWayContainer}>
        <div className={classes.Rectangle}></div>
        <img src={funWay}
             alt="The new fun way to ride"
             className={classes.FunWay}/>
    </div>
)

export default TheNewFunWayToRide