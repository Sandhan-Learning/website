import React from "react";
import Tabs from "./Tabs";
import "./App.css"

import "./Uniqueness.css"

function Uniqueness() {
  const mystyle={
    marginTop:'-262px',
    marginLeft:'935px',
    marginBottom:'37px'
  }
  const mystyle2={
    paddingBottom:'64px',
    marginLeft:'980px',
    height: '50vh',
    marginRight: '61px',
    marginTop: '-337px'
  }
  const mystyle3={
    marginLeft: '980px',
    height: '40vh',
    marginRight:' 61px',
    marginTop: '-292px',
    marginBottom: '51px',
  }
  const mystyle4={
    paddingBottom:'73px',
      height: '45vh',
    marginLeft: '943px',
    marginRight: '61px',
    marginTop: '-325px'
  }
  const mystyle5={
      color: 'white',
    backgroundColor: '#72bcd4'
 
  }
  return (
    <div className="homes">
      <h1></h1>
      <Tabs style={mystyle5}>
        
           <div  label="Innovation">
         <p className="first">Inspired By the Dr. APJ Abdul Kalam, Sandhan learning designed two educational
            supplement programs. Named after “Chanakya” the programs are designed separately for 
            schooling system and University system which can be opted by schools and University without disturbing their 
            regular academics. The programs not only provides 360 degree
            development to students however the programs are also completely in line with National Education policy-2020.</p>
            <img style={mystyle}src="/Images/innovation.png" alt="innovation"/>
        </div>
        
       
        <div label="Values">
          <p className="second">Once in an Interview Bharat RatnaDr. APJ Abdul Kalam said that “Development of nation lies on
             3 things “GDP, Financial Modeling and value system”. We at Sandhan believes that if GDP is low 
             it can be taken care, if Financial modeling is poor it still can be taken care of, but if Value system 
             is missing the whole country have to pay for it.We are living in an era where developed countries like Japan,
              Russia uses their heritage language, countries like china also uses their own language, but In India we need to 
              celebrate “ Hindi Pakhwada “ to let people aware about the language. Value system not only gives boost to 
              countries economy it also helps any country to establish a bridge between the old and the new generation and hence 
              gives a social balance to society.
             It is now really very important to inculcate value system in students from very beginning.</p>
             <img style={mystyle2}src="/Images/values.png" alt="values"/>
        </div>

        <div label="Moral Leadership">
         <p className="third">
           A leader can only understand the value of leadership, Inculcating leadership is not everyone’s skills.
            We strongly believe, the most important thing in life is proper guidance coming from a reliable source.
             Sandhan learning is based on the principles of Bharat RatnaDr. APJ Abdul Kalam and strongly believe to 
             inculcate right skills in students by providing absolute knowledge and information from reliable sources.
              In order to help students to get absolute information and knowledge we have coaches from diverse work
               profiles such as HR Managers, Ex- Defense Officers, R&D Specialist, Research Scientists, Training specialists, 
               Operation managers, Business Head, Entrepreneurs, Automobile experts, Public administrators who
            are mostly IIT/IIM Alumni holding/retired from senior positions with reputed organizations.
         </p>
         <img style={mystyle3} src="/Images/leadership.png" alt="moralLeadership"/>
        </div>
        <div className="ordered" label="Responsibility">
          <p className="fourth">
            At Sandhan we care for the nation and hence treat education as one of the most powerful way 
            to serve the nation. We had rigorously worked since long time and created two educational supplement 
            programs and named after “Guru Chanakya” the founding pillar of “Magadh empire” The programs are designed in 
            such a way that both complies completely with National Education policy 2020, develops 360 degree skills, make 
            students knowledgeable, skill full and self-reliant
             and hence have the tag line “The True Ambassador of Atmnirbhar Bharat”.
          </p>
          <img style={mystyle4} src="/Images/responsibility.jpeg.png" alt="responsibility"/>
        </div>
      </Tabs>
    </div>
  );
}

export default Uniqueness;
