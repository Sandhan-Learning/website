import React from "react";
import fire from "../firebaseIndex";
import TestimonialCardContainer from "./TestimonialCardContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "./Accordion";
import "./styles/FAQ.css";
import "./styles/webpage.css";
import CourseCardContainer from "./CourseCardContainer";
import personality_illustration from "../images/personality_illustration.svg";
import reading_illustration from "../images/reading_illustration.svg";
import Uniqueness from "./Uniqueness";
import ashok_leyland_logo from "../images/Logos/ashok-leyland.png";
import cummins_logo from "../images/Logos/cummins.png";
import hero_logo from "../images/Logos/hero.jpg";
import icici_logo from "../images/Logos/icici.jpg";
import mahindra_logo from "../images/Logos/mahindra.jpg";
import maruti_suzuki_logo from "../images/Logos/maruti-suzuki.jpg";
import mercedes_benz_logo from "../images/Logos/mercedes-benz.png";
import nissan_logo from "../images/Logos/nissan.jpg";
import tata_steel_logo from "../images/Logos/tata_steel.jpg";
import tata_logo from "../images/Logos/tata.jpg";
import indusind_logo from "../images/Logos/indusind.jpg";
import vedanta_logo from "../images/Logos/vedanta.png";
import hyundai_logo from "../images/Logos/hyundai.png";
import ibm_logo from "../images/Logos/ibm.png";
import infosys_logo from "../images/Logos/infosys.png";
import volvo_logo from "../images/Logos/volvo.png";
import hdfc_logo from "../images/Logos/hdfc.png";
import iimlucknow_logo from "../images/Logos/iimlucknow.jpg";
import Navbar from "./Navbar";
import ShareBar from "./ShareBar";
// import Modal from "./Modal";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HomeSlider from "./HomeSlider";

class Header extends React.Component {
	componentDidMount() {
		document.getElementById("fade").onclick = function () {
			lightbox_close();
		};
		document.getElementById("boxclose").onclick = function () {
			lightbox_close();
		};
		document.querySelector(".vidButton").onclick = function () {
			lightbox_open();
		};
		function lightbox_open() {
			var lightBoxVideo = document.getElementById("Video");
			window.scrollTo(0, 0);
			document.getElementById("light").style.display = "block";
			document.getElementById("fade").style.display = "block";
			lightBoxVideo.play();
		}

		function lightbox_close() {
			var lightBoxVideo = document.getElementById("Video");
			document.getElementById("light").style.display = "none";
			document.getElementById("fade").style.display = "none";
			lightBoxVideo.pause();
		}
	}
	render() {
		return (
			<>
				<div class='inner'>
					<h2>{this.props.title}</h2>
					<a href='#' class='ghost-btn'>
						<Link to='/chanakya'>
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
						</Link>
						<span>{this.props.buttonText}</span>
					</a>
				</div>
				<div class='illustration'>
					<img src={personality_illustration} alt='Image'></img>
				</div>
			</>
		);
	}
}

class OurVision extends React.Component {
	render() {
		return (
			<section class='side-image-content'>
				<div class='side-image'>
					<img src={reading_illustration} alt='Image'></img>
				</div>

				<div class='side-content'>
					<div class='titles'>
						<span class='title-bg'></span>
						<h3>OUR VISION</h3>
					</div>
					<p>
						A Complete education means when someone knows how to
						utilize one’s mind, skills, thoughts, learnings and
						dreams in a systematic manner so that he/she would not
						be worried about unemployment and uncertainty of life &
						Career.
					</p>
					<p>
						In our flagship program we create a learning environment
						where every individual develops professionally,
						psychologically, economically and will be a valuable
						asset to the organization, society and the Nation.
					</p>
					<Link to='/about' class='ghost-btn'>
						<svg>
							<defs>
								<linearGradient id='grad1'>
									<stop offset='0%' stop-color='#1488cc' />
									<stop offset='100%' stop-color='#2b32b2' />
								</linearGradient>
							</defs>
							<rect
								width='206'
								height='50'
								x='5'
								y='5'
								rx='25'
								fill='none'
								stroke='url(#grad1)'
							></rect>
						</svg>
						<span>Learn More</span>
					</Link>
				</div>
			</section>
		);
	}
}

class OurUniqueness extends React.Component {
	render() {
		return (
			<section className='uniqueness_section'>
				<div style={{ paddingTop: "50px" }}>
					<h3 className='unique'>OUR UNIQUENESS</h3>
					<div>
						<Uniqueness />
					</div>
				</div>
			</section>
		);
	}
}

class OurCourses extends React.Component {
	render() {
		return (
			<section class='main-features'>
				<div class='container'>
					<div class='row'>
						<div class='col-12'>
							<div class='titles'>
								<span class='title-bg'></span>
								<h3>OUR COURSES</h3>
							</div>
						</div>
					</div>
					<CourseCardContainer />
				</div>
			</section>
		);
	}
}

class CoachesFrom extends React.Component {
	render() {
		return (
			<section class='clients'>
				<div class='container'>
					<div class='row'>
						<div class='col-12'>
							<div class='titles'>
								<span class='title-bg'></span>
								<h3>Our expert coaches are from</h3>
							</div>
							<ul>
								<li>
									<img
										src={iimlucknow_logo}
										alt='Image'
									></img>
								</li>
								<li>
									<img
										src={ashok_leyland_logo}
										alt='Image'
									></img>
								</li>
								<li>
									<img src={cummins_logo} alt='Image'></img>
								</li>
								<li>
									<img src={hero_logo} alt='Image'></img>
								</li>
								<li>
									<img src={hyundai_logo} alt='Image'></img>
								</li>
								<li>
									<img src={ibm_logo} alt='Image'></img>
								</li>
								<li>
									<img src={infosys_logo} alt='Image'></img>
								</li>
								<li>
									<img src={volvo_logo} alt='Image'></img>
								</li>
								<li>
									<img src={hdfc_logo} alt='Image'></img>
								</li>
								<li>
									<img src={icici_logo} alt='Image'></img>
								</li>
								<li>
									<img
										src={tata_steel_logo}
										alt='Image'
									></img>
								</li>
								<li>
									<img src={mahindra_logo} alt='Image'></img>
								</li>
								<li>
									<img
										src={maruti_suzuki_logo}
										alt='Image'
									></img>
								</li>
								<li>
									<img src={tata_logo} alt='Image'></img>
								</li>
								<li>
									<img
										src={mercedes_benz_logo}
										alt='Image'
									></img>
								</li>
								<li>
									<img src={indusind_logo} alt='Image'></img>
								</li>
								<li>
									<img src={nissan_logo} alt='Image'></img>
								</li>
								<li>
									<img src={vedanta_logo} alt='Image'></img>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

class HomepageTestimonials extends React.Component {
	render() {
		return (
			<section class='main-features testimonial-section'>
				<div class='white-blob-wrap'>
					<div class='container' style={{ paddingBottom: "40px" }}>
						<div class='titles'>
							<span class='title-bg'></span>
							<h3>TESTIMONIALS</h3>
						</div>
						<TestimonialCardContainer />
					</div>
				</div>
			</section>
		);
	}
}

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ourVisionData: "",
			headerData: "",
			joinUsData: "",
		};
	}

	componentDidMount() {
		const headerRef = fire.database().ref("header");

		headerRef.on("value", (snapshot) => {
			this.setState({ headerData: snapshot.val() }, () => {});
		});

		const ourVisionRef = fire.database().ref("ourVision");

		ourVisionRef.on("value", (snapshot) => {
			this.setState({ ourVisionData: snapshot.val() }, () => {});
		});

		const joinUsRef = fire.database().ref("joinUs");

		joinUsRef.on("value", (snapshot) => {
			this.setState({ joinUsData: snapshot.val() }, () => {});
		});
	}

	render() {
		return (
			<>
				<div class='transition-overlay'></div>

				<div className='notPopup'>
					<Navbar
						videobg={<></>}
						inner={
							<>
								<HomeSlider />
							</>
						}
					/>
					<OurVision
						para1={this.state.ourVisionData.para1}
						para2={this.state.ourVisionData.para2}
						buttonText={this.state.ourVisionData.buttonText}
					/>
					<OurUniqueness />

					<OurCourses />
					<CoachesFrom />

					<Accordion />

					<HomepageTestimonials />
					<div className='socialMedias'>
						<ShareBar />
					</div>
					<section class='quote-bar'>
						<div class='container'>
							<div class='row'>
								<div class='col-12'>
									<h4>JOIN US</h4>
									<p class='mt-40'>
										If you are a teacher or an Industry
										expert and passionate about developing
										nation through education and have
										special skills that can help students,
										Come be a part of Sandhan
									</p>

									<Link to='/career' class='ghost-btn'>
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
												stroke='#ffffff'
											></rect>
										</svg>
										<span>JOIN US</span>

										<div id='fade'></div>
									</Link>
								</div>
							</div>
						</div>
					</section>

					<Footer />
				</div>
			</>
		);
	}
}

export default Homepage;
