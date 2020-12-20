import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import "./styles/StudentPrePlacement.css"

function ProgramAutomobile() {
    return (
        <div>
              <div className="preplacement_header">
                <Navbar/>
            </div>
            <div class="preplacementimage pre4">
                       <h1>Automobile Technology</h1>
            </div>
            <div  class="preplacement color4">
                <div class="placementtext1">
                    <h3>Program Overview</h3>
                    <p>Automobile and mechanical Industry is the biggest employment provider across the globe. The Industry is known as the blood line of economy of any country. Due to the mismanagement in education sector, Institutions are unable to provide updated and absolute information and knowledge about the Industry and hence do not prepare students as per market demand. </p>
                    <p>Automobile technology program at Sandhan learning deals with accurate and updated information, knowledge and skills that the automobile industry is looking for and that’s too from the experts of Automobile Industry that involves R&D specialists, Operation managers, Human resource managers, Training specialists and many more. </p>
                </div>
                <div class="placementtext1">
                    <h3>The Academic Gap</h3>
                    <p>While the Industry moved towards electrical vehicles and BS-6 technology the academic course structure still revolves around BS-3. As most of the educators who teaches mechanical engineering never worked with real time Automobile/mechanical Industry, they are not preoccupied with accurate knowledge, information and skills due to which students are unable to understand the Industry and their career inside the Industry as result students are unskilled with absolute wrong or no information.</p>
                </div>
                <div  class="placementtext1">
                    <h3>Automobile Technology at Sandhan</h3>
                    <p>Automobile Industry requires a manpower of more than 1 million every year. Automobile Technology at Sandhan is a complete training program about Automobile sector which is taken by Industry experts. The program deals with everything from Automobile industry that includes Automobile technology, evolution,anatomy, different technology used, upcoming technologies, Industry manpower requirement, requisite skills, different career options and many more. </p>
                    
                    
                </div>
                <div  class="placementtext1">
                    <h3>Benefits for student</h3>
                    <p>As the program is designed to provide accurate and updated training about Automobile Industry hence the program provides many benefits to students.</p>
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

export default ProgramAutomobile
