import React from "react"
import backgroundImage from "../../../src/assets/container@3x.webp"
import backgroundImageTablet from "../../../src/assets/tablet container@3x.webp"
import backgroundImageMobile from "../../../src/assets/container mobile@3x.webp"
import phoneImage from "../../../src/assets/mock@3x.webp"

import classes from "./AugmentedReality.module.css"

const AugmentedReality = ({ width }) => {
    if (width < 768) {
        return (
            <div className={classes.AugmentedReality}>
                <img src={backgroundImageMobile}
                     alt="Background Image"
                     className={classes.Background}/>
                <p className={classes.Paragraph}>Augmented reality</p>
                <img src={phoneImage}
                     alt="Phone"
                     className={classes.Phone}/>
            </div>
        )
    }
    else if (width < 1024) {
        return (
            <div className={classes.AugmentedReality}>
                <img src={backgroundImageTablet}
                     alt="Background Image"
                     className={classes.Background}/>
                <p className={classes.Paragraph}>Augmented reality</p>
                <img src={phoneImage}
                     alt="Phone"
                     className={classes.Phone}/>
            </div>
        )
    } else {
        return (
            <div className={classes.AugmentedReality}>
                <img src={backgroundImage}
                     alt="Background Image"
                     className={classes.Background}/>
                <p className={classes.Paragraph}>Augmented reality</p>
                <img src={phoneImage}
                     alt="Phone"
                     className={classes.Phone}/>
            </div>
        )
    }

}

export default AugmentedReality