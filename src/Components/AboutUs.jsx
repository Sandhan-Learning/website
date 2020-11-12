import React from "react";
import "./styles/aboutus.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image02 from "../images/About/image02.jpg";
import team01 from "../images/About/team01.jpg";
import team02 from "../images/About/team02.jpg";

class AboutUs extends React.Component {
	componentDidMount() {
		// var video = document.getElementById("video-apj");
		// var videoExitHeight = document.querySelector(".content").offsetTop;
		// if (
		// 	document.body.clientWidth >= 767 &&
		// 	window.pageYOffset <= videoExitHeight
		// ) {
		// 	video.setAttribute("autoplay", true);
		// 	video.classList.remove("hide");
		// }
		// function reportWindowScroll() {
		// 	videoExitHeight = document.querySelector(".content").offsetTop;
		// 	if (
		// 		document.body.clientWidth >= 767 &&
		// 		window.pageYOffset <= videoExitHeight
		// 	) {
		// 		video.classList.remove("hide");
		// 		video.play();
		// 		video.setAttribute("autoplay", true);
		// 	} else {
		// 		video.classList.add("hide");
		// 		video.removeAttribute("autoplay");
		// 		video.pause();
		// 	}
		// }
		// window.onscroll = reportWindowScroll;
	}

	render() {
		return (
			<>
				<body>
					<main>
						<Navbar
							videobg={
								<div class='video-container'>
									<div class='video-bg'>
										<video
											className='hide'
											id='video-apj'
											src='https://www.googleapis.com/drive/v3/files/1yCCXHKThpBssiYB7GdDOWSDMRxy9yNSc?alt=media&key=AIzaSyDpA6LwdU5_jYnW_UUiW8iNYXSzpacBhGg'
											loop
											autoPlay
											muted
										></video>
									</div>
								</div>
							}
							inner={
								<div class='inner video-overlay-text'>
									<h2 class='video-text'>ABOUT US</h2>
									<p>
										Sandhan Learning is based on the
										principles of Dr. APJ Abdul Kalam and
										dedicated towards improvement of
										education quality and to start
										experimental learning among youths for
										100% development to make self reliant
										India.
									</p>
								</div>
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
												Based on the principles of
												Bharat Ratna Dr. APJ Abdul
												Kalam, Sandhan Learning is an
												edutech organisation founded by
												IIM Lucknow alumni in line with
												NEP-2020 with a vision of
												Aatmanirbhar Bharat by
												inculcating 360-degree
												transformation and development
												in students and to make them
												future ready.
											</p>

											<p class='lead'>
												As the name “Sandhan” describes
												about itself “preparing an arrow
												to hit its target”. Similarly at
												Sandhan we not only train
												students, we help them to
												achieve their career goals. We
												believe, the most important
												thing in life is proper guidance
												coming from a reliable source
												and hence we inculcate right
												skills in students by providing
												absolute knowledge and
												information through our robust
												educational program upskilled by
												our coaches who are highly
												successful in their respective
												careers and are from diverse
												work profiles such as HR
												Managers, Ex-Defense Officers,
												R&D Specialists, Research
												Scientists, Training
												Specialists, Operation Managers,
												Business Heads, Entrepreneurs,
												Automobile Experts and Public
												Administrators who are mostly
												IIT/IIM Alumni holding/retired
												from senior positions with
												reputed organisations.
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
											<p></p>
										</div>
									</div>
								</div>
							</div>
							{/* <div class='team-members wow fadeInUp'>
								<figure class='member'>
									{" "}
									<img src={team01} alt='Image' />
									<figcaption>
										<div>
											<h3>Vikrant Biswal</h3>
											<small>Founder</small>{" "}
										</div>
									</figcaption>
								</figure>
								<figure class='member'>
									{" "}
									<img src={team02} alt='Image' />
									<figcaption>
										<div>
											<h3>Vikrant Biswal</h3>
											<small>Founder</small>{" "}
										</div>
									</figcaption>
								</figure>
								<figure class='member'>
									{" "}
									<img src={team01} alt='Image' />
									<figcaption>
										<div>
											<h3>Vikrant Biswal</h3>
											<small>Founder</small>{" "}
										</div>
									</figcaption>
								</figure>
								<figure class='member'>
									{" "}
									<img src={team02} alt='Image' />
									<figcaption>
										<div>
											<h3>Vikrant Biswal</h3>
											<small>Founder</small>{" "}
										</div>
									</figcaption>
								</figure>
								<figure class='member'>
									{" "}
									<img src={team01} alt='Image' />
									<figcaption>
										<div>
											<h3>Vikrant Biswal</h3>
											<small>Founder</small>{" "}
										</div>
									</figcaption>
								</figure>
							</div> */}
						</section>
						<section class='team'>
							<div class='container'>
								<ul>
									<li class='wow fadeIn'>
										<figure>
											<img src={team01} alt='Image' />
											<figcaption>
												<h5>Vikrant Biswal</h5>
												<small>Founder</small>
												<div class='social-links'>
													<a href='#'>
														<i class='fa fa-twitter'></i>
													</a>
													<a href='#'>
														<i class='fa fa-linkedin'></i>
													</a>
													<a href='#'>
														<i class='fa fa-facebook'></i>
													</a>
													<a href='#'>
														<i class='fa fa-instagram'></i>
													</a>
												</div>
											</figcaption>
										</figure>
									</li>
									<li class='wow fadeIn'>
										<figure>
											<img src={team01} alt='Image' />
											<figcaption>
												<h5>Vikrant Biswal</h5>
												<small>Founder</small>
												<div class='social-links'>
													<a href='#'>
														<i class='fa fa-twitter'></i>
													</a>
													<a href='#'>
														<i class='fa fa-linkedin'></i>
													</a>
													<a href='#'>
														<i class='fa fa-facebook'></i>
													</a>
													<a href='#'>
														<i class='fa fa-instagram'></i>
													</a>
												</div>
											</figcaption>
										</figure>
									</li>
									<li class='wow fadeIn'>
										<figure>
											<img src={team01} alt='Image' />
											<figcaption>
												<h5>Vikrant Biswal</h5>
												<small>Founder</small>
												<div class='social-links'>
													<a href='#'>
														<i class='fa fa-twitter'></i>
													</a>
													<a href='#'>
														<i class='fa fa-linkedin'></i>
													</a>
													<a href='#'>
														<i class='fa fa-facebook'></i>
													</a>
													<a href='#'>
														<i class='fa fa-instagram'></i>
													</a>
												</div>
											</figcaption>
										</figure>
									</li>
									<li class='wow fadeIn'>
										<figure>
											<img src={team01} alt='Image' />
											<figcaption>
												<h5>Vikrant Biswal</h5>
												<small>Founder</small>
												<div class='social-links'>
													<a href='#'>
														<i class='fa fa-twitter'></i>
													</a>
													<a href='#'>
														<i class='fa fa-linkedin'></i>
													</a>
													<a href='#'>
														<i class='fa fa-facebook'></i>
													</a>
													<a href='#'>
														<i class='fa fa-instagram'></i>
													</a>
												</div>
											</figcaption>
										</figure>
									</li>
									<li class='wow fadeIn'>
										<figure>
											<img src={team01} alt='Image' />
											<figcaption>
												<h5>Vikrant Biswal</h5>
												<small>Founder</small>
												<div class='social-links'>
													<a href='#'>
														<i class='fa fa-twitter'></i>
													</a>
													<a href='#'>
														<i class='fa fa-linkedin'></i>
													</a>
													<a href='#'>
														<i class='fa fa-facebook'></i>
													</a>
													<a href='#'>
														<i class='fa fa-instagram'></i>
													</a>
												</div>
											</figcaption>
										</figure>
									</li>
								</ul>
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
