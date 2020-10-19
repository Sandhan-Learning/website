//This is Jumbotron for Head of Home Page
import React from 'react'
import VideoPlayer from "react-video-js-player"
import Intro from "../Assets/Intro.mp4"
import poster from "../Assets/poster.jpg"

function HeadJumbo() {
    return (
        <div className="HeadJumbo">
        <div className="ChildJumbo1">
            <h1>
                WE RISE,<br/>
                WE HEAL,<br/>
                WE OVERCOME!
            </h1>
        </div>
        <div className="ChildJumbo2" />
        <div className="ChildJumbo3">
        <VideoPlayer
        className="IntroVid" 
        src={Intro}
        poster={poster}
        ></VideoPlayer>
        </div>
        <div className="ChildJumbo4">
        <h1>OUR MISSION :</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley
             of type and scrambled it to make a type specimen book. It has survived not 
             only five centuries </p>
        </div>
        </div>
        
    )
}

export default HeadJumbo
