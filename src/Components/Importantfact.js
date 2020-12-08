import React from 'react'
import importantfact from "../images/KnowMore/ImportantFacts.png"
import "./styles/Importantfact.css"
import "./styles/Ran.css"

function Importantfact() {
    return (
        <div className="importantfacts">
            <div className="importantfacts_margin">
               <h1>Important facts that needs to be noted</h1>
            <div className="importantfacts_display"> 
         
                <div class="importantfacts_text">
                  <ul class='icon-list list-blue'>
                      <li><i class='fa fa-angle-right'></i>Collective placement to enrolment ratio is just 34.81% which means more than 65% students requires
better skills.</li>
<li><i class='fa fa-angle-right'></i>
    Student’s faith on engineering institutes dropped down drastically from 62% to 56% from 2012 onwards.
</li>
<li><i class='fa fa-angle-right'></i>
    AICTE closed 517 engineering institutes since last 5 years, i.e 1 institute every 3 days due to non-
performance.
</li>
                  </ul>
                </div>
                <div className="importantfacts_image">
                    <img src={importantfact} alt=""/>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Importantfact
