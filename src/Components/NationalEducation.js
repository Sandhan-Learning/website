import React from 'react'
import "./styles/NationalEducation.css"
import NationalEducationimage from  "../images/KnowMore/clip-distance-education.png"
import "./styles/Ran.css"

function NationalEducation() {
    return (
        <div className="nationaleducation">
            <h1>National Education Policy 2020 (Need of the hour)</h1>
            <div className="nationaleducation_display">
                <div className="nationaleducation_text">
                    <p>The Government of India approved the national education policy 2020 on 30th July 2020. The main focus of the policy is to meet manpower requirement of changing global business environment by sustainable development programs. Few of the key points are mentioned below in points. </p>
  
                    <ul  class='icon-list list-blue'>
                        <li><i class='fa fa-angle-right'></i>Recognizing, identifying and fostering unique capabilities</li>
                        <li><i class='fa fa-angle-right'></i>Multidisciplinary and holistic educational approach  </li>
                        <li><i class='fa fa-angle-right'></i>Emphasis of concept understanding rather than rote learning</li>
                        <li><i class='fa fa-angle-right'></i>Inculcating creativity and critical thinking </li>
                        <li><i class='fa fa-angle-right'></i>Inculcating ethical, human and constitutional values</li>
                        <li><i class='fa fa-angle-right'></i>Development of life skills </li>
                        <li><i class='fa fa-angle-right'></i>Regular formative assessments for learning  </li>
                        <li><i class='fa fa-angle-right'></i>Extensive learning and usage of technology  </li>
                        <li><i class='fa fa-angle-right'></i>Respect for diversity, people, law and constitution</li>
                        <li><i class='fa fa-angle-right'></i>Promotion of multilinguistic and power of language </li>
                        <li><i class='fa fa-angle-right'></i>Learning how to learn and lifelong learning</li>
                        <li><i class='fa fa-angle-right'></i>Creating manpower for future </li>
                           <div className="reference">
            <a href="https://static.pib.gov.in/WriteReadData/userfiles/NEP_Final_English_0.pdf">Reference</a>
            </div>
                    </ul>
                </div>
                <div className="nationaleducation_image">
                    <img src={NationalEducationimage} alt=""/>
                </div>
            </div>
         
        </div>
    )
}

export default NationalEducation
