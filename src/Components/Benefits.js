import React from 'react'
import "./Benefits.css"
import Benefits_image from "../images/corporates.svg"

function Benefits() {
    return (
        <div className="benefits">
            <div className="benefits_para">
                <ul>
                    <li>The Program Creates 360-degree transformation and development without affecting student's academics curriculum. That means a student can inculcate corporate requiste skills and craft a better when he/she is pursuing graduation. </li>
                    <li>Excellent skills wil be inculcated in students and hence they will not be worried about market uncertainities.</li>
                    <li>Students will be preparing for private sector, government sector and enterpreneurship during their graduation which will help them to save time and money in future.</li>
                    <li>Students will orient themselves a better communicators, leaders, managers and entrepreneurs.</li>
                    <li>They wil have more stable and growimg careers as compared to others.</li>
                    <li>They will be financially more planned, efficient and stable.</li>
                    <li>Learnings, techniques and skills, which will help them in day to day professional enviornmnet.</li>
                </ul>

            </div>
            <div>
                <img className="benefits_image"src={Benefits_image} alt="benefitimage"/>
            </div>
            
        </div>
    )
}

export default Benefits
