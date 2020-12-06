import React from "react";
import "./styles/aboutus.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image02 from "../images/About/image02.jpg";
import team01 from "../images/About/team01.jpg";
import { ExpertCard } from "./Experts";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const expertData = [
	{
		expertName: "Vikrant Biswal",
		expertImg: "https://vinodg.me/Resources/16.jpg",
		expertDescription:
			"There is a very thin line between literacy and education. Your 16-20 years of academics will be considered as meaningless if someone is unable use it for the betterment of self, society and the nation. Once someone know how to use his/her knowledge towards development the person will be considered as educated.",
		expertDescription2:
			"At Sandhan, we are not only committed however we brought highly skilled Industry experts as educators and mentors to help students to bridge the gap of skills provided by institute and required by organizations and to make them highly successful in careers by our various programs.",
		expertPosition: "Co-founder and IIM Lucknow Alumni",
		expertDomain: "Management",
		expertAOE:
			"Human resource, Training and development, Organization development, people management, Strategic management, skill upgradation and many more",
		expertYear: "12",
		expertTwitter: "",
		expertLinkedin: "",
	},
	{
		expertName: "Jitender Kumar",
		expertImg: "https://vinodg.me/Resources/16.jpg",
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
		expertImg: "https://vinodg.me/Resources/16.jpg",
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
];

class AboutUs extends React.Component {
	render() {
		return (
			<>
				<body>
					<main>
						<Navbar
							videobg={<></>}
							inner={
								<>
									<div class='inner video-overlay-text'></div>
									<div class='header'>
										<div class='inner'>
											<h2 class='video-text'>
												<strong>ABOUT US</strong>
											</h2>
											<p class='video-text'>
												Founded on the principles of{" "}
												<strong>
													Dr. APJ Abdul Kalam
												</strong>
												, Sandhan Learning is dedicated
												towards nation building by
												improving quality of education
												by filling pitfalls of education
												system and starting experimental
												and progressive learning amongst
												youth. We are dedicated towards
												a self-reliant India by
												inculcating 360 degree
												development in students and
												providing them with better
												career opportunities.
											</p>
										</div>
										<div
											class='illustration kalam-video'
											style={{
												marginTop: "-100px",
												marginRight: "20px",
											}}
										>
											<ReactPlayer
												url='https://www.dailymotion.com/video/x7v0jbw'
												className='react-player'
												playing
												volume={50}
												loop
											/>
										</div>
									</div>
								</>
							}
						/>
						<section class='content'>
							<div class='about-company'>
								<figure class='hero-image wow fadeInUp'>
									{" "}
									<img src={image02} alt='Image' />
								</figure>
								<div class='container'>
									<div class='row'>
										<div class='col-md-4 wow fadeInLeft'>
											<h5>Sandhan Learning </h5>
											<p class='lead'>
												An IIM Lucknow Alumnus Startup
											</p>
											<a href='#' class='link'></a>{" "}
										</div>

										<div class='col-md-8 wow fadeInRight'>
											<p class='lead'>
												Sandhan Learning is an edutech
												organisation founded by{" "}
												<strong>
													IIM Lucknow alumni
												</strong>{" "}
												in line with NEP-2020 with a
												vision of{" "}
												<strong>
													Aatmanirbhar Bharat
												</strong>{" "}
												by inculcating 360-degree
												transformation and development
												in students and to make them
												future ready.
											</p>

											<p class='lead'>
												As the name{" "}
												<strong>“Sandhan”</strong>{" "}
												describes about itself
												“preparing an arrow to hit its
												target”. Similarly at Sandhan we
												not only train students, we help
												them to achieve their career
												goals. We believe, the most
												important thing in life is
												proper guidance coming from a
												reliable source and hence we
												inculcate right skills in
												students by providing absolute
												knowledge and information
												through our robust educational
												program upskilled by our coaches
												who are highly successful in
												their respective careers and are
												from diverse work profiles such
												as{" "}
												<strong>
													HR Managers, Ex-Defense
													Officers, R&D Specialists,
													Research Scientists,
													Training Specialists,
													Operation Managers, Business
													Heads, Entrepreneurs,
													Automobile Experts and
													Public Administrators
												</strong>{" "}
												who are mostly{" "}
												<strong>IIT/IIM Alumni</strong>{" "}
												holding/retired from senior
												positions with reputed
												organisations.
											</p>
											<p class='lead'>
												We at Sandhan have a strong team
												of highly motivated
												professionals who already have
												achieved their career goals and
												are/were in high value positions
												with tremendous experience and
												hence have special skills and
												approach in their teaching.
											</p>
											<Link
												to='/chanakya'
												class='ghost-btn'
											>
												<svg>
													<defs>
														<linearGradient>
															<stop
																offset='0%'
																stop-color='#FF8282'
															/>
															<stop
																offset='100%'
																stop-color='#E178ED'
															/>
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
												<span>Enroll Now</span>
											</Link>
											<br />
											<br />
											<br />
											<p></p>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class='talent-directory'>
							<div class='row justify-content-center mb-4 mb-lg-6'>
								<div class='col col-md-8 text-center'>
									<h2
										class='display-2 mb-3'
										style={{ color: "#2f2e41" }}
									>
										MEET THE TEAM
									</h2>
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
										expertDomain={expert["expertDomain"]}
										expertAOE={expert["expertAOE"]}
										expertYear={expert["expertYear"]}
										expertTwitter={expert["expertTwitter"]}
										expertLinkedin={
											expert["expertLinkedin"]
										}
									/>
								))}
							</div>
						</section>
					</main>
					<Footer />
				</body>
			</>
		);
	}
}

export default AboutUs;
