import React from "react"
import mapWithCars from "../../../assets/img-1@3x.webp"
import classes from "./ParagraphMap.module.css"

const ParagraphMap = () => (
    <>
        <p className={classes.Driving}>See who's driving and ask to join</p>
        <img src={mapWithCars}
             className={classes.MapWithCars}
             alt="Map with cars"/>
    </>
)

export default ParagraphMap