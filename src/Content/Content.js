import React from "react"
import Carpooling from "./Carpooling/Carpooling"
import classes from "./Content.module.css"
import Switcher from "./Switcher/Switcher";
import AugmentedReality from "./AugmentedReality/AugmentedReality";
import TheNewFunWayToRide from "./TheNewFunWayToRide/TheNewFunWayToRide";
import Video from "./Video/Video";
import MapStyleSwitcher from "./MapStyleSwitcher/MapStyleSwitcher";
import CarpoolMadeEasy from "./CarpoolMadeEasy/CarpoolMadeEasy";

const Content = ({ width, passengerClicked, setPassengerClicked }) => (
    <div className={classes.Content}>
        <Carpooling width={width}/>
        <Switcher passengerClicked={passengerClicked} setPassengerClicked={setPassengerClicked}/>
        <MapStyleSwitcher width={width}/>
        <AugmentedReality width={width}/>
        <TheNewFunWayToRide/>
        <Video/>
        <CarpoolMadeEasy/>
    </div>
)

export default Content