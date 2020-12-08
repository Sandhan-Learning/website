import React from 'react'
import aictegraph from "../images/KnowMore/chart.png";
import "./styles/Aicte.css"
import "./styles/Ran.css"

function Aicte() {
    return (
        <div className="aicte">
               <h1>AICTE and Technical Education</h1>
            <div className="aicte_texts">
             
                <div>
                    <p>All India Council for Technical Education (AICTE) was set up in November 1945 as a national-level apex advisory body to conduct a survey on the facilities available for technical education and to promote development in the country in a coordinated and integrated manner. And to ensure the same, as stipulated in the National Policy of Education (1986), AICTE was vested with</p>
                    <p className="aicte_text1">
                        <ul class='icon-list list-blue'>
                            <li><i class='fa fa-angle-right'></i>Statutory authority for planning, formulation, and maintenance of norms & standards</li>
                            <li><i class='fa fa-angle-right'></i>Quality assurance through accreditation</li>
                            <li><i class='fa fa-angle-right'></i>Funding in priority areas, monitoring, and evaluation</li>
                            <li><i class='fa fa-angle-right'></i>Maintaining parity of certification & awards</li>
                            <li><i class='fa fa-angle-right'></i>The management of technical education in the country</li>
                        </ul>
                    </p>
                    <p className="aicte_text2">The AICTE Act was constituted to provide for the establishment of an All India Council for Technical Education with a view to proper planning and co-ordinated development of a technical education system throughout the country, the promotion of qualitative improvements of such education in relation to planned quantitative growth, and regulation & proper maintenance of norms and standards in the technical education system and for the matters connected therewith.
(Source:AICTE-India.org)
</p>
                </div>

                <div className="aicte_text3">
                    <h3>AICTE Data that proves employability skill development requirement</h3>
                    <div className="aicte_text4">
                        <div>
                            <p>Since last several decades it is observed that the technical education structure is unable to provide desired results. One of the major reason behind the same is commercialization of education where engineering and management institutes highly compromise with the quality of education and corporate requisite skill set. </p>
                            <p className="aicte_text5">As since last many years corporate requirement strategy changed a lot and hence it became really important that students must be provided with quality education and inculcated with corporate requisite skill sets. </p>
                            <p className="aicte_text5">How Institutes compromise with quality education can be very well understood by the below charts and graphs. The Graphs are taken from www.AICTE-India.organd available for public usage. </p>
                        </div>
                        <div className="aicte_text6">
                            <p className="aictetext_para">AICTE Data that proves requirement of employability skills development.</p>
                            <img src={aictegraph} alt=""/>
                            <p>  (Data as per AICTE website – www.AICTE-India.org) </p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Aicte
