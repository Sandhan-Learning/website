import React from "react";
import "./styles/career.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import main_illustration from "../images/Career/FloatDoodle.svg";

class Career extends React.Component {
	render() {
		return (
			<>
				<Navbar
					videobg={<></>}
					inner={
						<>
							<section class='section-header bg-tertiary pb-10'>
								<div class='career-container'>
									<div class='row justify-content-between align-items-center'>
										<div class='col-12 col-lg-7'>
											<h1 class='home-text display-1 font-weight-extreme mb-4'>
												Join our team
											</h1>
											<br />
											<p class='lead mb-4 mb-lg-5 pr-lg-5'>
												It’s an audacious, incredibly
												rewarding mission that our
												increasingly diverse team is
												dedicated to achieving. Exciting
												challenges lie ahead—new
												regions, technologies, and
												businesses. Guided by our core
												values, we’ll meet these
												challenges creatively and with
												the support of our community.
												Join us!
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
				<main class='bg-soft'>
					<section class='section section-lg bg-tertiary'>
						<div class='career-container'>
							<div class='row justify-content-between align-items-center'>
								<div class='col-12 col-lg-5 mb-5 mb-lg-0'>
									<h3
										class='display-4 mb-0'
										style={{ color: "#2F2E41" }}
									>
										BENEFITS
									</h3>
									<h2
										class='display-2 mb-4'
										style={{ color: "#2F2E41" }}
									>
										Live your best life.
									</h2>
									<p class='lead mb-5'>
										There’s life at work and life outside of
										work. We want everyone to be healthy,
										travel often, get time to give back, and
										have the financial resources and support
										they need.
									</p>
								</div>
								<div class='col-12 col-lg-6'>
									<div class='row'>
										<div class='col-12 col-md-6 mb-3 mb-md-4'>
											<a class='card bg-primary text-white text-center animate-up-3 p-4'>
												<div>
													<div class='icon icon-xl text-white mb-7 mt-2'>
														<i class='fa fa-clock-o mb-4'></i>
													</div>
													<h4 class='mb-3'>
														Paid volunteer time
													</h4>
												</div>
											</a>
										</div>
										<div class='col-12 col-md-6 mb-3 mb-md-4'>
											<a class='card bg-primary text-white text-center animate-up-3 p-4'>
												<div>
													<div class='icon icon-xl text-white mb-7 mt-2'>
														<i class='fa fa-cutlery mb-4'></i>
													</div>
													<h4 class='mb-3'>
														Healthy food and snacks
													</h4>
												</div>
											</a>
										</div>
										<div class='col-12 col-md-6 mb-3 mb-md-4'>
											<a class='card bg-primary text-white text-center animate-up-3 p-4'>
												<div>
													<div class='icon icon-xl text-white mb-7 mt-2'>
														<i class='fa fa-child mb-4'></i>
													</div>
													<h4 class='mb-3'>
														Generous parental and
														family leave
													</h4>
												</div>
											</a>
										</div>
										<div class='col-12 col-md-6 mb-3 mb-md-4'>
											<a class='card bg-primary text-white text-center animate-up-3 p-4'>
												<div>
													<div class='icon icon-xl text-white mb-7 mt-2'>
														<i class='fa fa-book mb-4'></i>
													</div>
													<h4 class='mb-3'>
														Learning and development
													</h4>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section class='section section-lg pb-13 bg-tertiary mt-3'>
						<div class='career-container'>
							<div class='row justify-content-center mb-5'>
								<div class='col col-md-10 text-center'>
									<p class='h1 mb-6'>
										A company's{" "}
										<span class='text-primary font-weight-extreme'>
											internal culture
										</span>{" "}
										is reflected in their client
										relationships and their results
									</p>
								</div>
							</div>
							<div class='section section-lg pt-0 mt-5'>
								<div class='career-container mt-n9 z-2'>
									<div class='row justify-content-center'>
										<div class='col-12 col-lg-6 mb-3 mb-md-4'>
											<div class='card bg-primary text-white px-0 py-2 p-lg-4'>
												<div class='card-body'>
													<div class='icon icon-md text-white mb-3'>
														<i class='fa fa-cubes'></i>
													</div>
													<h4 class='mt-3 mb-3'>
														Our Values
													</h4>
													<p class='text-muted'>
														Our culture is built on
														the principles of
														autonomy, flexibility
														and trust, fostering a
														diverse, inclusive and
														supportive work
														environment that enables
														our people to push the
														boundaries of what’s
														possible.
													</p>
												</div>
											</div>
										</div>
										<div class='col-12 col-lg-6 mb-3 mb-md-4'>
											<div class='card bg-primary text-white px-0 py-2 p-lg-4'>
												<div class='card-body'>
													<div class='icon icon-md text-white mb-3'>
														<i class='fa fa-bullseye'></i>
													</div>
													<h4 class='mt-3 mb-3'>
														Our Mission
													</h4>
													<p class='text-muted'>
														Our mission is to stop
														breaches and our purpose
														is a promise: to provide
														safety and security to
														some of the world’s
														largest, most
														influential companies
														and, by extension, the
														billions of people
														around the world who use
														their services.
													</p>
												</div>
											</div>
										</div>
										<div class='col-12 col-lg-6 mb-3 mb-md-4'>
											<div class='card bg-primary text-white px-0 py-2 p-lg-4'>
												<div class='card-body'>
													<div class='icon icon-md text-white mb-3'>
														<i class='fa fa-lightbulb-o'></i>
													</div>
													<h4 class='mt-3 mb-3'>
														Our Future
													</h4>
													<p class='text-muted'>
														Innovation is at the
														heart of our
														organization. We draw on
														the collective
														experience and deep
														cultural diversity of
														our workforce to refine
														our business model—and
														upend it completely, if
														need be.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section class='section section-lg bg-soft'>
						<div class='career-container'>
							<div class='row justify-content-center mb-4 mb-lg-6'>
								<div class='col col-md-8 text-center'>
									<h2
										class='display-2 mb-3'
										style={{ color: "#2F2E41" }}
									>
										Open Positions
									</h2>
									<p class='lead'>
										We are always looking for creative,
										talented self-starters to join the Front
										family. Check out our open positions and
										fill out an application.
									</p>
								</div>
							</div>
							<div class='row mb-6'>
								<div class='col-12 mb-4'>
									<div class='card bg-primary border-0 text-white'>
										<div class='card-body p-4 p-lg-5'>
											<div class='row'>
												<div class='col-12 col-md-6 mb-4 mb-lg-0'>
													<h3 class='mb-3 '>
														Networking Engineer
													</h3>
													<p class='text-muted mb-4'>
														Build scalable systems,
														maintain existing
														servers and optimize for
														maximum speed and
														scalability
													</p>
													<div class='d-flex'>
														<span class='ml-0'>
															<i class='fa fa-map-marker'></i>
															<span class='h6 text-sm ml-2'>
																Mumbai, IN
															</span>
														</span>
														<span class='ml-4'>
															<i class='fa fa-user'></i>
															<span class='h6 text-sm ml-2'>
																Full Time
															</span>
														</span>
													</div>
												</div>
												<div class='col-12 col-md-6 d-flex align-items-center justify-content-md-end'>
													<a
														href='#'
														class='btn btn-secondary mr-3 animate-up-2 m-0'
													>
														Apply
													</a>{" "}
													<a
														href='career/networking-engineer'
														class='btn btn-white text-primary animate-up-2 m-0'
													>
														<i class='fa fa-clipboard mr-2'></i>
														See Details
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='row mb-6'>
								<div class='col-12 mb-4'>
									<div class='card bg-primary border-0 text-white'>
										<div class='card-body p-4 p-lg-5'>
											<div class='row'>
												<div class='col-12 col-md-6 mb-4 mb-lg-0'>
													<h3 class='mb-3 '>
														Frontend Developer
														Intern
													</h3>
													<p class='text-muted mb-4'>
														Come up with new
														user-facing features,
														optimize application for
														maximum speed and
														scalability
													</p>
													<div class='d-flex'>
														<span class='ml-0'>
															<i class='fa fa-map-marker'></i>
															<span class='h6 text-sm ml-2'>
																Bangalore, IN
															</span>
														</span>
														<span class='ml-4'>
															<i class='fa fa-user'></i>
															<span class='h6 text-sm ml-2'>
																Part Time
															</span>
														</span>
													</div>
												</div>
												<div class='col-12 col-md-6 d-flex align-items-center justify-content-md-end'>
													<a
														href='#'
														class='btn btn-secondary mr-3 animate-up-2 m-0'
													>
														Apply
													</a>{" "}
													<a
														href='career/frontend-intern'
														class='btn btn-white text-primary animate-up-2 m-0'
													>
														<i class='fa fa-clipboard mr-2'></i>
														See Details
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>

				<Footer />
			</>
		);
	}
}

export default Career;
