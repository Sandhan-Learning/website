import React from "react";
import TestimonialCardContainer from "./TestimonialCardContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from './Accordion'
import "./FAQ.css"
import "./webpage.css";
import contact_icon01 from "../images/contact-icon01.png";
import contact_icon02 from "../images/contact-icon02.png";
import contact_icon03 from "../images/contact-icon03.png";
import contact_icon04 from "../images/contact-icon04.png";
import sandhan_logo from "../images/sandhan_logo.png";
import tcs_logo from "../images/tcs-logo.png";
import mahindra_logo from "../images/mahindra_logo.jpg";
import vedanta_logo from "../images/vedanta_logo.png";
import microsoft_logo from "../images/microsoft-logo.png";
import tesla_logo from "../images/tesla_logo.png";
import facebook_logo from "../images/facebook_logo.png";
import sandhan_logo_whitebg from "../images/sandhan_logo.png";
import CourseCardContainer from "./CourseCardContainer";
import personality_illustration from "../images/personality_illustration.svg";
import reading_illustration from "../images/reading_illustration.svg";
import Uniqueness from "./Uniqueness";

class Header extends React.Component {
	constructor() {
		super();
		this.hamburgerReveal = this.hamburgerReveal.bind(this);
	}

	hamburgerReveal() {
		var hamburger_menu = document.querySelector(".hamburger-menu");
		var hamburger_menu_box = document.querySelector(".hamburger-menu-box");

		hamburger_menu.classList.toggle("open");
		hamburger_menu_box.classList.toggle("show-me");
	}

	render() {
		return (
			<>
				<div class='transition-overlay'></div>
				<aside class='hamburger-menu-box'>
					<div class='menu'>
						<ul class='navbar-nav'>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									HOME
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									ABOUT US
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									EXPERTS
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link'>
									COURSES
								</a>
								<ul>
									<li>
										<a href='#' class='transition'>
											STUDENTS
										</a>
									</li>
									<li>
										<a href='#' class='transition'>
											INSTITUTES
										</a>
									</li>
									<li>
										<a href='#' class='transition'>
											CORPORATE
										</a>
									</li>
								</ul>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									CONTACT US
								</a>
							</li>
						</ul>
					</div>
					<div class='inner'>
						<h2>TOGETHER AT SANDHAN</h2>
						<br></br>
						<p>
							No global movement springs from individuals. It
							takes an entire team united behind something big.
							Together we work hard, we laugh a lot, we brainstorm
							non stop, we use hundreds of Post-Its a week, and we
							give the best high-fives in town.
						</p>
						<p>
							It’s an audacious, incredibly rewarding mission that
							our increasingly diverse team is dedicated to
							achieving.
						</p>
						<p>
							Exciting challenges lie ahead—new regions,
							technologies, and businesses. Guided by our core
							values, we’ll meet these challenges creatively and
							with the support of our community. Join us!
						</p>
						<br></br>
						<a href='#' class='ghost-btn'>
							<svg>
								<rect
									width='206'
									height='50'
									x='5'
									y='5'
									rx='25'
									fill='none'
									stroke='#2F2E41'
								></rect>
							</svg>
							<span>Join Us!</span>
						</a>
					</div>
				</aside>
				<header class='header'>
					<nav class='navbar'>
						<div class='logo'>
							<a href='#' class='transition'>
								<img
									src={sandhan_logo_whitebg}
									alt='Image'
									class='logo-light'
								></img>
								<img
									src={sandhan_logo_whitebg}
									alt='Image'
									class='logo-colored'
								></img>
							</a>
						</div>

						<div
							class='hamburger-menu'
							onClick={this.hamburgerReveal}
						>
							<span></span> <span></span> <span></span>
						</div>

						<ul class='navbar-nav'>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									HOME
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									ABOUT US
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									EXPERTS
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link'>
									COURSES
								</a>
								<ul>
									<li>
										<a href='#' class='transition'>
											STUDENTS
										</a>
									</li>
									<li>
										<a href='#' class='transition'>
											INSTITUTES
										</a>
									</li>
									<li>
										<a href='#' class='transition'>
											CORPORATE
										</a>
									</li>
								</ul>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									CONTACT US
								</a>
							</li>
						</ul>
					</nav>
					<div class='inner'>
						<h2>Learn from industry experts for a better career</h2>
						<a href='#' class='ghost-btn'>
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
						</a>
					</div>
					<div class='illustration'>
						<img src={personality_illustration} alt='Image'></img>
					</div>
				</header>
			</>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<>
				<section class='footer-bar'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon01} alt='Image'></img>
								</figure>
								<h4>E-MAILS</h4>
								<address>Education.sandhan@gmail.com</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon02} alt='Image'></img>
								</figure>
								<h4>PHONES</h4>
								<address>+91 7978349894</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon03} alt='Image'></img>
								</figure>
								<h4>SUPPORT</h4>
								<address>Mon to Fri 09:00am to 04:00pm</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon04} alt='Image'></img>
								</figure>
								<h4>LOCATION</h4>
								<address>
									Arcon Heights, Gothapatna, BBSR
								</address>
							</div>
						</div>
					</div>
				</section>
				<footer class='footer'>
					<div class='container'>
						<div class='row'>
							<div class='col-12'>
								<img
									src={sandhan_logo}
									alt='Image'
									class='logo'
								></img>
								<p>
									Sandhan Learning is based on the principles
									of Dr. APJ Abdul Kalam and dedicated towards
									improvement <br></br>of education quality
									and to start experimental learning among
									youths for 100% development to make self
									reliant India.
								</p>
								<ul>
									<li>
										<a href='#'>Facebook</a>
									</li>
									<li>
										<a href='#'>Youtube</a>
									</li>
									<li>
										<a href='#'>Instagram</a>
									</li>
									<li>
										<a href='#'>Twitter</a>
									</li>
								</ul>
								<small>
									© 2020 Sandhan Learning | All Rights
									Reserved.
								</small>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

class Homepage extends React.Component {
	componentDidMount() {
		window.onscroll = function () {
			myFunction();
		};
		var navbar = document.querySelector(".navbar");
		var sticky = navbar.offsetTop;

		function myFunction() {
			if (window.pageYOffset > sticky) {
				navbar.classList.add("stick-me");
			} else {
				navbar.classList.remove("stick-me");
			}
		}
	}
	render() {
		return (
			<>
				<div class='transition-overlay'></div>

				<Header />

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
							utilize one’s{" "}
							<strong>mind, skills, thoughts, learnings</strong>{" "}
							and
							<strong> dreams</strong> in a systematic manner so
							that he/she would not be worried about unemployment
							and uncertainty of life & Career.
						</p>
						<p>
							In our flagship program we create a learning
							environment where every individual develops
							<strong>
								{" "}
								professionally, psychologically, economically
							</strong>{" "}
							and will be a valuable asset to the organization,
							society and the Nation.
						</p>
						<a href='#' class='ghost-btn'>
							<svg>
								<defs>
									<linearGradient id='grad1'>
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
									stroke='url(#grad1)'
								></rect>
							</svg>
							<span>Learn More +</span>
						</a>
					</div>
				</section>
				<section>
					<div>
					<h3 className="unique">OUR UNIQUENESS</h3>
					<div><Uniqueness/></div>
					
					</div>
					{/*<div class='container'>
						<div class='row justify-content-center'>
							<div class='titles'>
								<span class='title-bg'></span>
								<h3>OUR UNIQUENESS</h3>
							</div>
							<div class='col-lg-2 col-md-2 col-6'>
								<figure>
									<img
										src='images/icon-1.jpg'
										alt='Image'
									></img>
								</figure>
								<h6>FEATURE 1</h6>
							</div>
							<div class='col-lg-2 col-md-2 col-6'>
								<figure>
									<img
										src='images/icon-2.jpg'
										alt='Image'
									></img>
								</figure>
								<h6>FEATURE 2</h6>
							</div>
							<div class='col-lg-2 col-md-2 col-6'>
								<figure>
									<img
										src='images/icon-3.jpg'
										alt='Image'
									></img>
								</figure>
								<h6>FEATURE 3</h6>
							</div>
							<div class='col-lg-2 col-md-2 col-6'>
								<figure>
									<img
										src='images/icon-4.jpg'
										alt='Image'
									></img>
								</figure>
								<h6>FEATURE 4</h6>
							</div>
						</div>
		</div>*/}
				</section>
				<section>
					<div>
					<Accordion/>
				</div>
				</section>
				
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
										<img src={tcs_logo} alt='Image'></img>
									</li>
									<li>
										<img
											src={mahindra_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img
											src={vedanta_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img src={tesla_logo} alt='Image'></img>
									</li>
									<li>
										<img
											src={microsoft_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img
											src={facebook_logo}
											alt='Image'
										></img>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section class='main-features'>
					<div class='container'>
						<div class='titles'>
							<span class='title-bg'></span>
							<h3>TESTIMONIALS</h3>
						</div>
						<TestimonialCardContainer />
					</div>
				</section>
				<section class='quote-bar'>
					<div class='container'>
						<div class='row'>
							<div class='col-12'>
								<h4>LET'S WORK TOGETHER ?</h4>
								<p>
									Feel free to get in touch with us. We are
									always open to discussing new projects,
									creative ideas or opportunities to be a part
									of your visions.
								</p>
								<a href='#' class='ghost-btn'>
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
									<span>GET IN TOUCH</span>
								</a>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</>
		);
	}
}

export default Homepage;
