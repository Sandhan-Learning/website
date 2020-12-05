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
import Navbar from "./Navbar";
// import Modal from "./Modal";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import ShareBar from "./ShareBar";

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
					<p>{this.props.para1}</p>
					<p>{this.props.para2}</p>
					<a href='#' class='ghost-btn'>
						<svg>
							<defs>
								<linearGradient id='grad1'>
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
								stroke='url(#grad1)'
							></rect>
						</svg>
						<span>{this.props.buttonText}</span>
					</a>
				</div>
			</section>
		);
	}
}

class OurUniqueness extends React.Component {
	render() {
		return (
			<section className="uniqueness_section">
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
								<h3>Our experts coaches are from</h3>
							</div>
							<ul>
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
			<section class='main-features'>
				<div class='container'>
					<div class='titles'>
						<span class='title-bg'></span>
						<h3>TESTIMONIALS</h3>
					</div>
					<TestimonialCardContainer />
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
								<div id='light'>
									<a class='boxclose' id='boxclose'></a>
									<video id='Video' width='900px'>
										<source
											src='https://www.googleapis.com/drive/v3/files/1pv2bnhYCQPluu24_54p7HHxW6x3hSNZe?alt=media&key=AIzaSyAuT4romdlgsj6PUHK2xoijJc2QU7NDyKk'
											type='video/mp4'
										></source>
									</video>
								</div>
									<div className="socialMedias"><ShareBar/></div>
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
					<Accordion />
					<OurCourses />
					<CoachesFrom />
					<HomepageTestimonials />

					<section class='quote-bar'>
						<div class='container'>
							<div class='row'>
								<div class='col-12'>
									<h4>{this.state.joinUsData.title}</h4>
									<p>{this.state.joinUsData.para}</p>

									<a href='#' class='ghost-btn vidButton'>
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
										<span>
											{this.state.joinUsData.buttonText}
										</span>

										<div id='fade'></div>
									</a>
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
