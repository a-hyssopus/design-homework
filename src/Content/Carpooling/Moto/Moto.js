import classes from "./Moto.module.css";
import React from "react";
import fun from "../../../assets/fun.svg"

const Moto = () => (
    <div className={classes.Paragraph}>
        <p className={classes.Carpooling}>carpooling made <span className={classes.Bold}>easy, <br/> safe </span> and <span className={classes.Fun}><img src={fun}/></span><span className={classes.Italic}> for everyone</span></p>
    </div>
)

export default Moto