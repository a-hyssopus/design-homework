import React from "react"
import classes from "./Header.module.css"
import logo from "../assets/Logo.svg"
import NavBar from "./NavBar/NavBar";

const Header = () => (
    <div className={classes.header}>
        <div className={classes.headerElements}>
            <img className={classes.logo} src={logo} alt="logo"/>
            <NavBar/>
            <div className={classes.ios}/>
            <div className={classes.android}/>
        </div>
    </div>
)

export default Header