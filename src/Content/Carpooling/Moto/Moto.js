import React from "react";
import classes from "./Moto.module.css";
import fun from "../../../assets/fun.svg"

const Moto = ({ width }) => {
    console.log(width);

    if (width < 770) {
        return (
            <div className={classes.Paragraph}>
                <p className={classes.Carpooling}>carpooling made <br/><span
                    className={classes.Bold}>easy, safe </span> and <span className={classes.Fun}><img src={fun} className={classes.FunImg}/></span> <br/><span
                    className={classes.Italic}> for everyone</span></p>
            </div>
        )
    } else if (width < 1024) {
        return (
            <div className={classes.Paragraph}>
                <p className={classes.Carpooling}>carpooling made <span
                    className={classes.Bold}>easy, <br/> safe </span> and <span className={classes.Fun}><img src={fun}/></span><span
                    className={classes.Italic}> for <br/> everyone</span></p>
            </div>
        )
    } else {
        return (
            <div className={classes.Paragraph}>
                <p className={classes.Carpooling}>carpooling made <span
                    className={classes.Bold}>easy, <br/> safe </span> and <span className={classes.Fun}><img src={fun}/></span><span
                    className={classes.Italic}> for <br/> everyone</span></p>
            </div>
        )
    }
}

export default Moto