import React from "react"
import videoConnections from "../../assets/bg-video.mp4"
import classes from "./Video.module.css"

const Video = () => (
    <div className={classes.ContainerVideo}>
        <div className={classes.GradientVideo}/>
        <video src={videoConnections}
               className={classes.Video}
               width="100%"
               autoPlay
               muted
               loop/>
        <p className={classes.overlayVideoh1}>now - is a fresh way to share the road and make new connections.</p>
        <p className={classes.overlayVideoP}>Choose to drive or ride with people already going your way</p>
    </div>
)

export default Video