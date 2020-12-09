import React from 'react'
import "./styles/EducationSystem.css"
import educationsystemimage from "../images/KnowMore/Education.svg"
import "./styles/Ran.css"

function EducationSystem() {
    return (
        <div className="educationsystem">
     
            <h1>Importance and requirement of transformation of current education system</h1>
            <div className="educationsystem_display">
                <div className="educationsystem_image">
                    <img src={educationsystemimage} alt=""/>
                </div>
                <div className="educationsystem_text">
                    <ul class='icon-list list-blue'>
                        <li><i class='fa fa-angle-right'></i>If the situation doesn’t improves it will be difficult for Indian graduates and engineers to compete with the global market.</li>
                        <li><i class='fa fa-angle-right'></i>Engineering and management institutes charges training and development charges from students however never pay any attention towards such skill development program for students, which questions the very basic motive of the institutes. </li>
                        <li><i class='fa fa-angle-right'></i>Within next 10 years India will be one of the country with highest no of youth ,If the situation doesn’t improves India will soon see high no of unemployed and unproductive youth. </li>
                        <li><i class='fa fa-angle-right'></i>The need of the hour is to produce as much of entrepreneurs so that they could produce more employment that could be valuable to the society.</li>
                        <li><i class='fa fa-angle-right'></i>It is important for youth to identify their true potential so that they could be valuable for the society instead of being burden on the society and the nation.</li>
                        <li><i class='fa fa-angle-right'></i>Students don’t remember more than 90% of their life time academics and hence it is really important they start learning education that can be really helpful for them for their entire life. </li>

                    </ul>
                </div>
            </div>
       
            
        </div>
    )
}

export default EducationSystem
