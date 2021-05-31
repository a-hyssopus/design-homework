import React from "react"
import classes from "./CarpoolMadeEasy.module.css"
import iphone from "../../assets/iPhone X@3x.webp"
import ios from "../../assets/ios - active _ hover.svg"
import android from "../../assets/android - active _ hover.svg"
// import carpoolGraph from "../../assets/carpool-graph.svg"
import carpoolGraphMine from "../../assets/triangle.png"

import {paths} from "../../Constants/constants";
import Tilt from "react-parallax-tilt";

const CarpoolMadeEasy = () => (
    <div className={classes.ContainerMadeEasy}>
        <div className={classes.Phone}
             alt="Triangle">
            <img src={iphone} alt="iPhone" className={classes.Iphone}/>
            <Tilt className={classes.Tilt}
                  tiltMaxAngleX={90}
                  tiltMaxAngleY={75}
                  perspective={800}
                  transitionSpeed={800}
                  scale={1}>
                <div className={classes.Triangles}>
                    <div className={classes.Triangle}/>
                    <div className={classes.OrangeTriangle}/>
                </div>
            </Tilt>
            <p className={classes.MadeEasyParagraph}>carpool <br/> made easy</p>
            <div className={classes.MadeEasyGradient}>
                <p className={classes.JoinTheBand}>Join the band</p>
            </div>
        </div>
        <p className={classes.FreshWay}>a fresh way to share the road and make new connections</p>
        <div className={classes.Footer}/>
        <div className={classes.Rectangles}>
            <div className={classes.Rectangle}>
                <a href={paths.getAppIos}
                   target="_blank">
                    <img src={ios} alt="ios" className={classes.IosImage}/>
                    <p className={classes.Download}>Download for iOS</p>
                </a>
            </div>
            <div className={classes.Rectangle}>
                <a href={paths.getAppAndroid}
                   target="_blank">
                    <img src={android} alt="ios" className={classes.AndroidImage}/>
                    <p className={classes.Download}>Download for Android</p>
                </a>
            </div>
        </div>
    </div>
)

export default CarpoolMadeEasy