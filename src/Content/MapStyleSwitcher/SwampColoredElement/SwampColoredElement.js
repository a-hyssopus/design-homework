import React from "react"
import classes from "./SwampColoredElement.module.css"
import map from "../../../assets/Icon-map.svg"

const SwampColoredElement = () => (
    <div className={classes.Swamp}>
        <div className={classes.Circle}/>
        <img src={map}
             className={classes.MapImage}
             alt="Map"/>
             <p className={classes.MapParagraph}>Map style switcher</p>
    </div>
)

export default SwampColoredElement