import React from "react";
import "./styles/experts.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import team02 from "../images/Experts/team02.jpg";
import main_illustration from "../images/Experts/illus.png";
import fire from "../firebaseIndex";

const expertData = [
	{
		expertName: "Vikrant Biswal",
		expertImg: "https://vinodg.me/Resources/broken.png",
		expertDescription:
			"Mr. Vikrant Biswal is the Co-founder, an IIM lucknow alumni and a lead educator at Sandhan learning. Specialized in many core management areas like Human resource management, recruitment, business strategies, marketing, corporate training and development, public speaking and innovation Mr. Biswal helped many Individuals, Startups and organizations to grow in a very short span of time.",
		expertDescription2:
			"During his tenure with Industries and Institutes Mr. Biswal trained more than 10000 people to develop Industry requisite skills. Apart from that he also have a keen interest to develop students from the root level and to make them Industry ready.",
		expertPosition: "Lead Instructor and Co-Founder",
		expertDomain: "Management",
		expertAOE:
			"Human resource, Training and development, Organization development, people management, Strategic management, skill upgradation and many more",
		expertYear: "12",
		expertTwitter: "",
		expertLinkedin: "",
	},
	{
		expertName: "Jitender Kumar",
		expertImg: "https://vinodg.me/Resources/broken.png",
		expertDescription:
			"Mr. Kumar is merchant Navy professional, a hard core Engineer, a passionate entrepreneur and a great mentor. Graduated from Singapore maritime academy Mr. Kumar Worked with several International merchant navy companies like MERSK sea line and achieved epitome of career in a very short span of time.",
		expertDescription2: "",
		expertPosition: "Lead educator and Entrepreneur",
		expertDomain: "Management",
		expertAOE:
			"Mechanical Engineering, Electrical engineering, Ship maintenance, Entrepreneurship and many more",
		expertYear: "14",
		expertTwitter: "",
		expertLinkedin: "",
	},
	{
		expertName: "Reema Dubey",
		expertImg: "https://vinodg.me/Resources/broken.png",
		expertDescription:
			"Miss Reema Dubey is a professional educator and an Indian Airforce recommended candidate. She also cracked several government examinations including UPSC prelims. Miss Dubey is not only a great strategist to crack Govt. Examination however she is also a great teacher who can help someone to crack the same.",
		expertDescription2: "",
		expertPosition: "Instructor",
		expertDomain: "Education",
		expertAOE: "Govt. service, AFCAT, UPSC, SSB and many more",
		expertYear: "8",
		expertTwitter: "",
		expertLinkedin: "",
	},
	{
		expertName: "Suman Kumar",
		expertImg: "https://vinodg.me/Resources/broken.png",
		expertDescription:
			"Mr. Suman Kumar is an award winning professional corporate trainer who have his expertise in Automobile Industry and have extreme knowledge about the Industry. Worked with several Automobile giants Mr. Kumar will help you to gain all the necessary knowledge and skills that Automobile Industry requires.",
		expertDescription2: "",
		expertPosition: "Instructor",
		expertDomain: "Training and Development",
		expertAOE:
			"Automobile trainings, Industry domain knowledge &amp; skill upgradation",
		expertYear: "8",
		expertTwitter: "",
		expertLinkedin: "",
	},
	{
		expertName: "Mr. Bhaskar Datta",
		expertImg: "https://vinodg.me/Resources/broken.png",
		expertDescription:
			"With an extensive 33 years of working experience in organization like TATA Motors, Mr Datta have some greatest achievement in the field of Automobile industry. He was one of the key stake person behind the operation of Asia’s biggest bus network “Delhi Transport Corporation”.",
		expertDescription2: "",
		expertPosition: "Instructor",
		expertDomain: "Automobile",
		expertAOE:
			"Network expansion, Business development, operation management and many more",
		expertYear: "33",
		expertTwitter: "",
		expertLinkedin: "",
	},
	{
		expertName: "Arunesh Bose",
		expertImg: "https://vinodg.me/Resources/broken.png",
		expertDescription:
			"Mr. Arunesh bose possess in depth technical knowledge of Indian Automobile sector and has catered many Automobile manufacturers including the largest automobile manufacturer in India.",
		expertDescription2: "",
		expertPosition: "Instructor",
		expertDomain: "Automobile",
		expertAOE:
			"Automobile trainings, Industry domain knowledge &amp; skill upgradation",
		expertYear: "8",
		expertTwitter: "",
		expertLinkedin: "",
	},
	{
		expertName: "Kali Prasad Dubey",
		expertImg: "https://vinodg.me/Resources/broken.png",
		expertDescription:
			"Mr. Kali Prasad Dubey is an extremely talented emergency management Specialist, who worked with organizations like reliance petrochemicals &amp; TATA steels. When this Covid-19 emergency showed the world that how much emergency management is important, Mr. Dubey is an extremely reliable personal with Sandhan learning who will be helping students to explore the opportunities in emergency management.",
		expertDescription2: "",
		expertPosition: "Instructor",
		expertDomain: "Emergency management and corporate security",
		expertAOE:
			"Corporate security, NEBOSH, Emergency management and many other",
		expertYear: "7",
		expertTwitter: "",
		expertLinkedin: "",
	},
	{
		expertName: "Mr. Radheshyam Yadav",
		expertImg: "https://vinodg.me/Resources/broken.png",
		expertDescription:
			"An engineering Graduate from IIT Roorkee and a passionate teacher who gave his corporate life for the love of academics and teachings. Mr. Yadav have an experience of more than 20 years in academics and possess special skills in his teachings.",
		expertDescription2: "",
		expertPosition: "Instructor",
		expertDomain: "Academics",
		expertAOE: "Academics",
		expertYear: "20",
		expertTwitter: "",
		expertLinkedin: "",
	},
];

class Experts extends React.Component {
	render() {
		console.log(expertData);
		return (
			<>
				<Navbar
					videobg={<></>}
					inner={
						<>
							<section
								class='section-header bg-tertiary pb-10'
								style={{ backgroundColor: "#f4f7fa" }}
							>
								<div class='career-container'>
									<div class='row justify-content-between align-items-center'>
										<div class='col-12 col-lg-7'>
											<h1 class='home-text display-1 font-weight-extreme mb-4'>
												OUR EXPERTS
											</h1>
											<br />
											<p class='lead mb-4 mb-lg-5 pr-lg-5'>
												At Sandhan we believe that
												Industry experts are the true
												bearers of absolute knowledge
												and information. Industry
												experts at Sandhan are not only
												highly experienced in their
												respective domains however they
												are also highly innovative and
												unique in their knowledge
												delivery abilities.
											</p>
										</div>
										<div class='col-12 col-md-5 d-none d-lg-block text-center'>
											<img
												src={main_illustration}
												alt=''
											/>
										</div>
									</div>
								</div>
							</section>
						</>
					}
				/>
				<div
					id='content'
					class='site-content content-wrapper page-content'
				>
					<div class='page type-page hentry'>
						<div
							class='page-content-body'
							style={{ backgroundColor: "#f4f7fa" }}
						>
							<section class='talent-directory'>
								<div class='row justify-content-center mb-4 mb-lg-6'>
									<div class='col col-md-8 text-center'>
										<h2
											class='display-2 mb-3'
											style={{ color: "#2f2e41" }}
										>
											Meet the experts
										</h2>
										<p class='lead pb-70'>
											As we pave the road to the future,
											our industry-leading innovators are
											driving us every day. Meet some of
											the experts that makes Sandhan
											Learning work.
										</p>
									</div>
								</div>
								<div class='container'>
									{expertData.map((expert) => (
										<ExpertCard
											expertName={expert["expertName"]}
											expertImg={expert["expertImg"]}
											expertDescription={
												expert["expertDescription"]
											}
											expertDescription2={
												expert["expertDescription2"]
											}
											expertPosition={
												expert["expertPosition"]
											}
											expertDomain={
												expert["expertDomain"]
											}
											expertAOE={expert["expertAOE"]}
											expertYear={expert["expertYear"]}
											expertTwitter={
												expert["expertTwitter"]
											}
											expertLinkedin={
												expert["expertLinkedin"]
											}
										/>
									))}
								</div>
							</section>
						</div>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

class ExpertCard extends React.Component {
	render() {
		return (
			<div class='row'>
				<div class='col-xl-4 col-lg-4'>
					<div class='authors-area mb-30'>
						<div class='team-img'>
							<img src={this.props.expertImg} alt='' />
						</div>
						<div class='team-content white-bg d-flex'>
							<div class='team-text'>
								<h4>{this.props.expertName}</h4>
								<span>{this.props.expertPosition}</span>
							</div>
							<div class='team-media white-bg'>
								<div class='team-social'>
									<a href={this.props.expertTwitter}>
										<i class='fa fa-twitter'></i>
									</a>
									<a href={this.props.expertLinkedin}>
										<i class='fa fa-linkedin'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='col-xl-8 col-lg-8'>
					<div class='author-about-content white-bg mb-30'>
						<p class='mb-20'>{this.props.expertDescription}</p>
						<p class='mb-20'>{this.props.expertDescription2}</p>
						<p class='mb-20'>
							<strong>DOMAIN :</strong> {this.props.expertDomain}
						</p>
						<p class='mb-20'>
							<strong>AREA OF EXPERTISE :</strong>{" "}
							{this.props.expertAOE}
						</p>
						<p class='mb-20'>
							<strong>YEARS OF EXPERIENCE :</strong>{" "}
							{this.props.expertYear}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export { Experts, ExpertCard };
