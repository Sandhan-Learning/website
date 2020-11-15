import React,{useState} from 'react'
import "./Corporate.css"
import CorporateImage from "../images/Benefits.svg"

function Corporate() {
 
    return (
        <div className="corporate">
          
            <div>
                <img src={CorporateImage} alt="corporate_image"/>
            </div>
            <div className="corporate_right">
                <h3>High Technical with Low Personal Skills</h3>
       
                <ul className="corporate_list">
                <li>They are less successful in career.</li>
                  <li>  They are unable to express ideas and hence don't evolve. </li> 
                    <li>No appropriate benefits will be provided to them by companies.</li>
                     <li>Lack of presentation skills will lead to less credential in the company.</li>
                     <li>They have to compromise in placement and packages.</li> 
                     <li>They will be offered with low benefits as compared to students with better personal skills.</li>
                     <li>They have less organised career and hence leads to uncertainity in professional life.</li>
                 </ul>
              
                <p  className="corporate_technical"></p>
                <h3 className="corporate_personal">High Personal Skills</h3>
              
               <ul  className="corporate_list">
                    <li>They are highly successful in career. </li>
                    <li>They always get exposure as are highly creative and expressive.</li>
                    <li>They are preferred over person with only techical skills. </li>
                    <li>They always acquire higher packages during placements. </li>
                    <li>They are most structured and hence are always in demand even if there is market uncertainty.</li>
            
              </ul>

            </div>
            
        </div>
    )
}

export default Corporate
