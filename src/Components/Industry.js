import React,{useState} from 'react'
import "./Industry.css"

function Industry({name,job,about,image}) {
    
    return (
        <div className="industry_card">
            <div className="upper_container">
                <div className="image_container">
                    <img src={image}alt="" height="100px" width="100px"/>

                </div>

            </div>
            <div className="lower_container">
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>{about}</p>
            </div>
            
        </div>
    )
}

export default Industry
