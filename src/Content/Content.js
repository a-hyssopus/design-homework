import React from "react"
import Carpooling from "./Carpooling/Carpooling"
import classes from "./Content.module.css"
import Switcher from "./Switcher/Switcher";

const Content = () => (
    <div className={classes.Content}>
        <Carpooling/>
        <Switcher/>
    </div>
)

export default Content