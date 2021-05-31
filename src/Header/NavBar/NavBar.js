import React from "react"
import classes from "./Navbar.module.css"
import {NavHashLink, HashLink} from "react-router-hash-link"

const NavBar = ({passengerClicked, setPassengerClicked}) => {
    return (
        <>
            <NavHashLink to={"/#now"}
                         onClick={() => setPassengerClicked(null)}
                         activeStyle={{color: "#000000"}}>Now</NavHashLink>
            <HashLink exact to={"/#rideDrive"}
                      className={passengerClicked === true ? `${classes.Active}` : null}
                      onClick={() => setPassengerClicked(true)}>
                How to ride</HashLink>
            <HashLink exact to={"/#rideDrive"}
                      className={passengerClicked === false ? `${classes.Active}` : null}
                      onClick={() => setPassengerClicked(false)}>
                How to drive</HashLink>
            <NavHashLink exact to={"/#features"}
                         onClick={() => setPassengerClicked(null)}
                         activeStyle={{color: "#000000"}}>
                Features</NavHashLink>
        </>
    )
}

export default NavBar
