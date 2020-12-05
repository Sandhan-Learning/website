import React from "react";
import Tabs from "./Tabs";
import Innovation from "../images/Uniqueimages/Innovation.png";
import Values from "../images/Uniqueimages/valuesfinal.png";
import Leadership from "../images/Uniqueimages/Leadershipfinal.png";
import Responsibility from "../images/Uniqueimages/Responsibilityfinal.png";

import "./styles/Uniqueness.css";

function Uniqueness() {
	const mystyle = {
		marginTop: "-262px",
		marginLeft: "800px",
		marginBottom: "37px",
	};
	const mystyle2 = {
		paddingBottom: "64px",
		marginLeft: "952px",
		height: "70vh",
		marginRight: "61px",
		marginTop: "-347px",
	};
	const mystyle3 = {
		marginLeft: "980px",
		height: "45vh",
		marginRight: " 61px",
		marginTop: "-292px",
		marginBottom: "51px",
	};
	const mystyle4 = {
		paddingBottom: "73px",
		height: "50vh",
		marginLeft: "880px",
		marginRight: "61px",
		marginTop: "-371px",
	};
	const mystyle5 = {
		color: "white",
		backgroundColor: "#72bcd4",
	};
	return (
		<div className='homes'>
			<h1></h1>
			<Tabs style={mystyle5}>
				<div label='Innovation'>
					<p className='first'>
					Inspired by<span> Late. Dr. APJ Abdul Kalam</span>, Sandhan learning researched,
Innovated &amp; designed two educational supplement programs separately for
schooling system and graduation system. Named after “Chanakya” the programs
are designed with the principle of<span> “learning by doing &amp; mentored by experienced” </span> 
 which not only support current and future demand of Indian
Education System by providing 360 degree development and employability skills
however also are completely in-line with<span> National education Policy-2020</span>.
					</p>
					<img style={mystyle} src={Innovation} alt='innovation' />
				</div>

				<div label='Values'>
					<p className='second'>
					Once in an Interview <span>Bharat Ratna Dr. APJ Abdul Kalam</span> said that
“Development of a nation lies on 3 things “GDP, Financial Modeling and value
system”. We at Sandhan believe that if GDP is low it can be taken care of if
Financial modeling is poor it still can be taken care of, but if the Value system is
missing or weak the whole country have to pay for it.
We are living in an era where developed countries like Japan, Russia uses their
heritage language, countries like China also uses its own language. But In India,
we need to celebrate <span>" Hindi Pakhwada "</span> to create awareness of the language.
Value system not only gives a boost to countries economy by making responsible
citizens, it also helps any country to establish a bridge between the old and the
new generation and hence gives a social balance to society. It is now really very
important to inculcate value system in students from the very beginning.		
			</p>
					<img style={mystyle2} src={Values} alt='values' />
				</div>

				<div label='Moral Leadership'>
					<p className='third'>
					A leader can only understand the value of leadership, inculcating leadership
capabilities is not everyone’s skills. We strongly believe, the most important thing
in life is proper guidance coming from a reliable source. “Imagine learning
swimming from a coach who himself don’t know how to swim.”
Sandhan learning is based on the principles of Bharat Ratna Dr. APJ Abdul
Kalam and strongly believes in inculcating right skills in students by providing
absolute knowledge and information from reliable sources. To help students to
get absolute information and knowledge, we have coaches from diverse work
profiles such as <span>HR Managers, Ex- Defense Officers, R&amp;D Specialist,
Research Scientists, Training specialists, Operation managers, Business
Head, Entrepreneurs, Automobile experts, Public administrators </span>who are
mostly<span> IIT/IIM Alumni</span>  holding/retired from senior positions with reputed
organizations.
					</p>
					<img
						style={mystyle3}
						src={Leadership}
						alt='moralLeadership'
					/>
				</div>
				<div className='ordered' label='Responsibility'>
					<p className='fourth'>
				At Sandhan we care about the Nation and hence treat education as one of the
most powerful ways to serve back to the nation and to make it<span> “truly
Atmnirbhar”</span>. Based on philanthropic approach we not only believe however we
provide education which is highly affordable, high on quality and inculcate all the
skills that is missing in current education scenario.
Named after<span> “Guru Chanakya” </span>the founding pillar of<span> “Magadh empire”</span> The
programs are designed in such a way that both complies completely with
<span> National Education policy 2020</span>, develops 360-degree skills, make students
knowledgeable, skill full and self-reliant and hence have the tag line <span>“The True
Ambassador of Atmnirbhar Bharat”</span>.
					</p>
					<img
						style={mystyle4}
						src={Responsibility}
						alt='responsibility'
					/>
				</div>
			</Tabs>
		</div>
	);
}

export default Uniqueness;
