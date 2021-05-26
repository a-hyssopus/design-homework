import React from "react"
import classes from "./Navbar.module.css"
import { NavLink } from "react-router-dom"
import { paths } from "../../Constants/constants"

const NavBar = () => (
    <>
        <NavLink to={paths.now}
                 activeStyle={{color: "#000000"}}
                 className={classes.navlink}>Now</NavLink>
        <NavLink exact to={paths.ride}
                 activeStyle={{color: "#000000"}}
                 className={classes.navlink}>How to ride</NavLink>
        <NavLink exact to={paths.drive}
                 activeStyle={{color: "#000000"}}
                 className={classes.navlink}>How to drive</NavLink>
        <NavLink exact to={paths.features}
                 activeStyle={{color: "#000000"}}
                 className={`${classes.features} ${classes.navlink}`}>Features</NavLink>
        <NavLink exact to={paths.getApp}
                 activeStyle={{color: "#000000"}}
                 className={`${classes.getApp} ${classes.navlink}`} >Get the App</NavLink>
    </>
)

export default NavBar
