import React from "react"
import Carpooling from "./Carpooling/Carpooling"
import classes from "./Content.module.css"
import Switcher from "./Switcher/Switcher";
import AugmentedReality from "./AugmentedReality/AugmentedReality";

const Content = () => (
    <div className={classes.Content}>
        <Carpooling/>
        {/*<Switcher/>*/}
        <AugmentedReality/>
    </div>
)

export default Content