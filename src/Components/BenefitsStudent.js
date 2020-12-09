import React from 'react'
import "./styles/BenefitsStudent.css"
import benefitsstudent_image from "../images/KnowMore/Reading.png"
import "./styles/Ran.css"

function BenefitsStudent() {
    return (
        <div className="benefitsstudent">
            <h1>Benefits of the program for students</h1>
            <div className="benefitstudent_display">
                <div className="benefitsstudent_image">
                    <img src={benefitsstudent_image} alt="" />
                </div>
                <div classname="bene_text">
                    <ul class='icon-list list-blue'>
                        <li><i class='fa fa-angle-right'></i>The program creates 360 degree transformation and development without affecting students’ academic curriculum. That means a student can inculcate corporate requisite skills and craft a better career when he/she is pursuing graduation.  </li>
                        <li><i class='fa fa-angle-right'></i>Excellent skills will be inculcated in students and hence they will not be worried about market uncertainties.</li>
                        <li><i class='fa fa-angle-right'></i>Students will be preparing for Govt. sector, Private sector and entrepreneurship during their graduation which will help them to save time and money in future</li>
                        <li><i class='fa fa-angle-right'></i>Students will orient themselves as better communicators, orators, critical thinkers, leaders, managers and entrepreneurs.</li>
                        <li><i class='fa fa-angle-right'></i>They will have more stable and better career as compared to others. </li>
                        <li><i class='fa fa-angle-right'></i>They will be financially more planned, efficient and stable.</li>
                        <li><i class='fa fa-angle-right'></i>Learning techniques and skills, which will help them in day to day personal and professional environment.</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default BenefitsStudent
