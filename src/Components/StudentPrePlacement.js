import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import "./styles/StudentPrePlacement.css"
import "./styles/Ran.css"
import SchoolIcon from '@material-ui/icons/School';



function StudentPrePlacement() {
    return (
        <div className="studentpreplacement">
              <div className="preplacement_header">
                <Navbar/>
            </div>
            <div class="preplacementimage pre1">
                       <h1>PRE PLACEMENT TRAINING</h1>
            </div>
       
            <div class="preplacement color1">
                <div class="placementtext1">
                    <h3>Program Overview</h3>
                    <p>Pre-Placement Training program is designed to help students who are seeking placements provided by
their institute. At Sandhan Pre-Placement training is provided by Industry experts and hence deliver
better results and higher packages.</p>
                </div>
                <div class="placementtext1">
                    <h3> <SchoolIcon/>The Academic Gap</h3>
                    <p>In most of the Institutions Pre-Placement Training program is outsourced and is provided by any third
party vendor. It is observed that more than 99% trainers are not paid well and are struggling in their
own career. Similarly Aptitude is taken by someone who never cracked any compitative exams and
Interview skills is taken by someone who never cracked any real time Job interview or he/she was never
from the recruitment board of any reputed organization.</p>
                </div>
                <div  class="placementtext1">
                    <h3>Pre Placement at Sandhan</h3>
                    <p>At sandhan learning we understand that pre-placement is an Important and last stage of academic life of
a student. We help students to learn skills only from experts, for example Interview skills is taught by
Human resource personal and aptitude is taught by people who cracked many competitive exams.</p>
                </div>
                <div class="ourmodules">
                    <h3>Our modules covers several areas</h3>
                <div class="placementflex" >
                        
                    <div class="placementlist">
                        <ul  class='icon-list list-blue'>
                            <li><i class='fa fa-angle-right'></i>Quantative Aptitude
                                <ul >
                                    <li><i class='fa fa-angle-right'></i>Algebra</li>
                                    <li><i class='fa fa-angle-right'></i>Arithmetic</li>
                                    <li><i class='fa fa-angle-right'></i>Geometry and Mensuration</li>
                                    <li><i class='fa fa-angle-right'></i>Higher Mathematics</li>
                                </ul>
                            </li>
                            <li><i class='fa fa-angle-right'></i>Data Interpretation</li>
                            <li><i class='fa fa-angle-right'></i>Reasoning</li>
                            <li><i class='fa fa-angle-right'></i>Verbal Ability and Reading Comprehension</li>
                      
                        </ul>
                    </div>
                   <div></div>
                    <div class="placementpara">
                        <div>
                            <h5>Group Discussion</h5>
                            <p>At sandhan GD is based on the parameters of Defense forces and elite services.</p>
                        </div>
                        <div class="placementinnerpara">
                              <h5>Personal Interview</h5>
                            <p>At Sandhan Cracking Interview is taught by HR managers and people with real time
experience in MNC’s and Govt.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="placementtext1">
                <h3>Benefits of Student</h3>
                <p>As the program is designed to provide accurate and updated training on recruitment. A student will be
equipped with accurate information, higher degree of knowledge, confidence and skills and hence will
have the first choice in any Interview.</p>
            </div>
              			<div class="studentprespan">
                <a href='' class='ghost-btn'>
					
						<svg>
							<defs>
								<linearGradient>
									<stop offset='0%' stop-color='#FF8282' />
									<stop offset='100%' stop-color='#E178ED' />
								</linearGradient>
							</defs>
							<rect
								width='206'
								height='50'
								x='5'
								y='5'
								rx='25'
								fill='none'
								stroke='#0F5AF2'
							></rect>
						</svg>
					
						<span >Enroll Now</span>
					</a>
    </div>
 
				
            </div>
           
               <Footer/>
        </div>
    )
}

export default StudentPrePlacement
