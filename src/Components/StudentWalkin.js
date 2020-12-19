import React from 'react'
import "./styles/StudentPrePlacement.css"
import Navbar from './Navbar'
import Footer from './Footer'

function StudentWalkin() {
    return (
        <div>
                 <div className="preplacement_header">
                <Navbar/>
            </div>
            <div class="preplacementimage pre5">
                       <h1>WALKIN PLACEMENT</h1>
            </div>
            <div  class="preplacement color5">
                <div class="placementtext1">
                    <h3>Program Overview</h3>
                    <p>Pre-Placement Training program is designed to help students who are seeking jobs post their graduation. It is seen that candidates make many mistakes while applying for Jobs starting from CV preparation to Interview preparation either they are misguided or poorly guided that force them to struggle in career. </p>
                </div>
                <div class="placementtext1">
                    <h3>Walkin Training at Sandhan</h3>
                    <p>At sandhan learning we understand that how much crucial career is for someone, especially a graduate student is sitting on a ticking time bomb where every day raises a question on his capability and existence. </p>
                    <p>At sandhan learning we have cracked the Interview program loopholes and sharing the same with students so that they could be employed at the earliest. </p>
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

export default StudentWalkin
