import Chanakyas from "../images/Logos/chanakya.png"
import React,{useState} from 'react'
import "./Chanakya.css"
import ReadMoreDemo from './ReadMoreFlagship'
import Corporate from "./Corporate"
import Industry from "./Industry"
import Management from "./Management"
import Benefits from "./Benefits"
import Navbar from "./Navbar"
import Footer from "./Footer";





function Chanakya() {
    const[name,setName]=useState('Your Name');
    const[job,setJob]=useState('Job Title');
    const[about,setAbout]=useState("Lorem Ipsum Text")
    const[image,setImage]=useState('Image');
    const imageStyle ={
        marginTop:'-150px',
    marginLeft: "50%",
    transform: "translateX(-140px)",
    textAlign: "center"

    }
       const Corporate_header ={
        marginTop:"80px"
    }
    const chanakya_Industry ={
        marginTop:"100px"
    }
    const chanakya_management={
        marginTop:"80px"

    }
    const chanakya_benefits={
          marginTop:"80px"

    }
   
    return (
        <div className="chanakya">
             <Navbar/>            
                
               
            
            
            
            
            <section className="Flagship_section">
                  <div><img style={imageStyle} src={Chanakyas} alt="chanakya_image"/></div>
                <h1>Flagship program of Sandhan Learning</h1>
                <div>
                  <ReadMoreDemo/>
                </div>
            </section>
            <section>
                  <h1 style={Corporate_header}>What do Corporates Look now a days?</h1>
                <Corporate/>
            </section>
            <section className="chanakya_industry">
                <h1 style={chanakya_Industry}>What does Industry Talk About your Education Structure?</h1>
                <div className="chanakya_cards">
                    <div><Industry image={'https://bsmedia.business-standard.com/_media/bs/img/article/2018-02/20/full/1519069163-4947.jpg'} name={'Deepak Parekh'} job={'HDFC Chairman'} about={'An average of 15 lakh graduate engineers pass out every year, and four-fifth of them are not employable due to lack of adequate skills. This is despite having more than 3,300 approved engineering colleges in the country. Teachers need to undertake necessary training so that students become employable after graduating.'}/></div>
                    <div className="chanakya_cardsecond"><Industry image={'https://www.gsb.stanford.edu/sites/default/files/styles/1630x_variable/public/resources/vftt-rometti-1630.jpg?itok=wmhAKzvW'} name={'Ginni Rometty'} job={'CEO IBM'} about={"In India, you have the same issues. Open jobs, (but) no matching skill sets. You have got to believe in a few different things than I think you believed in the past. One is to believe that skills are perhaps more important than a degree."}/></div>
                    <div className="chanakya_cardthird"><Industry image={'data:image/jpeg;base64,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'} name={'Srinivas Kandula'} job={'Capgemini India Chief'} about={'I am not very pessimistic, but it is a challenging task and I tend to believe that 60-65% of them are just not trainable. A large number of them cannot be trained. Probably, India will witness the largest unemployment in the middle level to senior level.'}/></div>
                </div>
            </section>
            <section>
                <h1 style={chanakya_management}>5 Foundation Modules</h1>
                <Management/>
            </section>
            <section className="chanakya_section">
                <h1 style={chanakya_benefits}>Key Benefits Students</h1>
                <Benefits/>
            </section>
                 <div className="chanakya_enroll">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSexhgH3hS8I2HGlDm21wIpPvRAko6ILE4DS5mlPdg71icgYLw/viewform?usp=send_form' class='ghost-btn'>
					
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
					
						<span>ENROLL NOW</span>
					</a>
                    </div>
            
            	
            
            <Footer/>
            
          
          
            
        </div>
    )
}

export default Chanakya
