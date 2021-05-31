import React from "react"
import classes from "./Header.module.css"
import logo from "../assets/Logo.svg"
import NavBar from "./NavBar/NavBar"
import {paths} from "../Constants/constants"

const Header = ({ width, setPassengerClicked, passengerClicked }) => {
    if (width < 1024) {
        return (
            <div className={classes.header}>
                <div className={classes.headerElements}>
                    <img className={classes.logo} src={logo} alt="logo"/>
                    <div className={classes.GetAppContainer}>
                    <p className={classes.GetApp}>Get the App</p>
                    <div className={classes.GetIosApp}>
                        <a href={paths.getAppIos}
                           className={classes.Anchor}
                           target="_blank">
                            <div className={classes.ios}/>
                        </a>
                    </div>
                    <div>
                        <a href={paths.getAppAndroid}
                           className={classes.Anchor}
                           target="_blank">
                            <div className={classes.android}/>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={classes.header}>
                <div className={classes.headerElements}>
                    <img className={classes.logo} src={logo} alt="logo"/>
                    <NavBar
                        passengerClicked={passengerClicked}
                        setPassengerClicked={setPassengerClicked}/>
                    <p className={classes.GetApp}>Get the App</p>
                    <div className={classes.GetIosApp}>
                        <a href={paths.getAppIos}
                           className={classes.Anchor}
                           target="_blank">
                            <div className={classes.ios}/>
                        </a>
                    </div>
                    <div>
                        <a href={paths.getAppAndroid}
                           className={classes.Anchor}
                           target="_blank">
                            <div className={classes.android}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header