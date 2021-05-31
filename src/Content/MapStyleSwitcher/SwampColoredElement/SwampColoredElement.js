import React from "react"
import classes from "./SwampColoredElement.module.css"
import map from "../../../assets/Icon-map.svg"

const SwampColoredElement = ({width}) => {
    if (width < 767) {
        return (<div className={classes.Swamp}>
            <div className={classes.Swamp2}>
                <div className={classes.Circle}/>
                <img src={map}
                     className={classes.MapImage}
                     alt="Map"/>
                <p className={classes.MapParagraph}>Map style switcher</p>
            </div>
        </div>)
    } else {
        return (
            <div className={classes.Swamp}>
                <div className={classes.Circle}/>
                <img src={map}
                     className={classes.MapImage}
                     alt="Map"/>
                <p className={classes.MapParagraph}>Map style switcher</p>
            </div>)
    }
}


export default SwampColoredElement