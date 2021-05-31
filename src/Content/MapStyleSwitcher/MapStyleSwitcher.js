import React from "react"
import classes from "./MapStyleSwitcher.module.css"
import SwampColoredElement from "./SwampColoredElement/SwampColoredElement";
import BlueElement from "./BlueElement/BlueElement";
import OrangeElement from "./OrangeElement/OrangeElement";

const MapStyleSwitcher = ({ width }) => {
    // if (width < 767) {
    //     return (<div id="features" className={classes.ContainerMapSwitcher}>
    //         <div className={classes.ContainerMapSwitcher2}>
    //             <SwampColoredElement/>
    //             <BlueElement/>
    //             <OrangeElement/>
    //         </div>
    //     </div>)
    // } else {
        return (<div id="features" className={classes.ContainerMapSwitcher}>
            <SwampColoredElement width={width}/>
            <BlueElement/>
            <OrangeElement/>
        </div>)
    }


export default MapStyleSwitcher