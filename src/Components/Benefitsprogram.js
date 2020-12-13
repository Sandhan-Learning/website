import React from 'react'
import "./styles/Benefitsprogram.css"
import "./styles/Ran.css"
import benefitimage from "../images/KnowMore/isolation.png"

function Benefitsprogram() {
    return (
        <div className="benefitsprogram">
            <h1>Benefits of the program for Institutes</h1>
            <div className="benefits_display">
                <div className="benefitsprogram_text">
                    <ul  class='icon-list list-blue'>
                    <li><i class='fa fa-angle-right'></i>The programs are completely in-line with<span> National education policy-2020.</span> </li>
                    <li><i class='fa fa-angle-right'></i>It will help to Institutes NAAC rating </li>
                    <li><i class='fa fa-angle-right'></i>Enrollment will be automatically increased due to higher success rate of students. </li>
                    <li><i class='fa fa-angle-right'></i>It will create a better learning environment in the regular academic environment. </li>
                    <li><i class='fa fa-angle-right'></i>It will create more entrepreneurs and successful individuals. </li>
                    <li><i class='fa fa-angle-right'></i>Institutes can use it as mandatory or vocational skill development program. </li>
                    </ul>
                </div>
                <div className="benefitsprogram_image">
                    <img src={benefitimage} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Benefitsprogram
