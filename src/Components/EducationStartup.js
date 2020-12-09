import React from 'react'
import random_image from "../images/KnowMore/clip-school.png";
import "./styles/EducationStartup.css"
import "./styles/Ran.css"

function EducationStartup() {
    return (
        <div>
            <div className="educationstartup">
                <h1>Education System</h1>
                <div>
                    <div className="educationtext1">
                        <p>In current scenario Indian education system is widely divided in 2 parts:</p>
                    </div>
                    <div className="startup_image">
                        <img src={random_image} alt=""/>
                    </div>

                </div>
               
                <div className="educationtext2">
                    <div>
                    <p><span>School : </span>10+2 = 12 years</p>
                   <p><span>University : </span>3/4 + 2 = 5/6 years(Here / denotes or I.e 3 or 4 years, 5 or 6 years)</p>
                   </div>
                   <div className="educationtext2_para">
                   <p>Where schools are governed by CBSE, State Boards and ICSE Board, Engineering and MBA Institutes are governed by AICTE and Universities are goverened by UGC. The purpose of setting these bodies is to create human resource to cater market requirement of present and future.</p>
                   <p>All these bodies are part of Ministry of human Resource development (MHRD) which is now ministry of education.</p>
                     </div>

                </div>
                <div className="educationtext3">
                    <h3>Abbrevations:</h3>
                    <ul class='icon-list list-blue'>
                        <li><i class='fa fa-angle-right'></i><span>AICTE : </span>All India council of Technical Education</li>
                        <li><i class='fa fa-angle-right'></i><span>UGC : </span>University Grant commission </li>
                        <li><i class='fa fa-angle-right'></i><span>CBSE :</span> Central board of secondary education </li>
                        <li><i class='fa fa-angle-right'></i><span>ICSE :</span> Indian Certificate of secondary education </li>
                    </ul>

                </div>
            </div>
            
        </div>
    )
}

export default EducationStartup
