import React,{useState} from 'react'
import "./Chanakya.css"
import Flagship from "../images/Flagship.svg"

function ReadMore({children,maxCharacterCount=100}){
    const text=children;
    const [isTruncated,setIsTruncated]=useState(true); 
    const resultString =isTruncated ? text.slice(0,maxCharacterCount):text;
    function toogleIsTruncated(){
        setIsTruncated(!isTruncated);
    }

    return(
        <p className="has-text-left">
            {resultString}
            <span onClick={toogleIsTruncated} className="tag is-info is-small">
                {isTruncated ? "Read More" : "Read Less"}
            </span>
        </p>
    )
}

function ReadMoreFlagship(props) {
    return (
        <div className="chanakya_flagship">
            <div className="flagship_para">
            <ReadMore  maxCharacterCount={367}>
               
            
        Named after “Chanakya” the founder pillar of Magadh Empire, it is a flagship skill development and
career enhancement program of sandhan learning, which is designed after detailed discussions and
careful evaluation of many corporate and government recruitment trend and to overcome all the
shortfall of current education system of graduation and postgraduation.      Designed to provide corporate requisite skills and knowledge by corporate experts it helps students to prepare for Government sector, corporate sector and Entrepreneurship and hence covering all the areas of employment.
Created with 5 super modules and more than 150 Sub modules Chanakya is an excellent program
conceptualized and designed in such a way that it is well efficient in providing foundation, support and
proper guidance to students who are willing to prepare for elite services like UPSC, State civil services,
Defense and other government &amp; private services. Apart from this Chanakyais very comprehensive and much needed knowledge and skill bank for students who are willing to pursue their career in the field of LAW, Engineering, Administration, Management and Entrepreneurship. Apart from being successfully employed, students will orient themselves to be financially secured and well established in life.

            </ReadMore>
            </div>
             <div>
                    <img src={Flagship} alt="about_component" />
                </div>
            
        </div>
    )
}

export default ReadMoreFlagship
