import React from "react";
import "./styles/experts.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import team02 from "../images/Experts/team02.jpg";
import main_illustration from "../images/Experts/illus.png";

class Experts extends React.Component {
	render() {
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
												Our people combine a passion for
												your business with the expertise
												learned from working with
												others. This innovative approach
												allows us to continually provide
												meaningful technical advice,
												smart new applications, and
												insightful analysis to keep you
												performing. Discover some of our
												experts.
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
										<p class='lead'>
											As we pave the road to the future,
											our industry-leading innovators are
											driving us every day. Meet some of
											the experts that makes Sandhan
											Learning work.
										</p>
									</div>
								</div>
								<div class='container'>
									<div class='section-content'>
										<div class='row'>
											<div class='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
												<div class='talent-item'>
													<a class='profile-img'>
														<img
															src={team02}
															alt='image'
														/>
													</a>
													<h3>
														<a>Andrew Ng</a>
													</h3>
													<span>Instructor</span>
													<p>
														Andrew Ng is Co-founder
														of Coursera, and an
														Adjunct Professor of
														Computer Science at
														Stanford University. His
														machine learning course
														is the MOOC that had led
														to the founding of
														Coursera!
													</p>
													<ul class='instructor-numbers'>
														<li>
															Domain :
															<strong>
																Machine Learning
															</strong>
														</li>
														<li>
															Experience :
															<strong>
																18 Years
															</strong>
														</li>
														<li>
															Courses Authored :
															<strong>7</strong>
														</li>
													</ul>
												</div>
											</div>
											<div class='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
												<div class='talent-item'>
													<a class='profile-img'>
														<img
															src={team02}
															alt='image'
														/>
													</a>
													<h3>
														<a>Abhishek Kumar</a>
													</h3>
													<span>Instructor</span>
													<p>
														Andrew Ng is Co-founder
														of Coursera, and an
														Adjunct Professor of
														Computer Science at
														Stanford University. His
														machine learning course
														is the MOOC that had led
														to the founding of
														Coursera!
													</p>
													<ul class='instructor-numbers'>
														<li>
															Domain :
															<strong>
																Software
																Development
															</strong>
														</li>
														<li>
															Experience :
															<strong>
																9 Years
															</strong>
														</li>
														<li>
															Courses Authored :
															<strong>4</strong>
														</li>
													</ul>
												</div>
											</div>
											<div class='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
												<div class='talent-item'>
													<a class='profile-img'>
														<img
															src={team02}
															alt='image'
														/>
													</a>
													<h3>
														<a>Andrew Ng</a>
													</h3>
													<span>Instructor</span>
													<p>
														Andrew Ng is Co-founder
														of Coursera, and an
														Adjunct Professor of
														Computer Science at
														Stanford University. His
														machine learning course
														is the MOOC that had led
														to the founding of
														Coursera!
													</p>
													<ul class='instructor-numbers'>
														<li>
															Domain :
															<strong>
																Machine Learning
															</strong>
														</li>
														<li>
															Experience :
															<strong>
																18 Years
															</strong>
														</li>
														<li>
															Courses Authored :
															<strong>7</strong>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
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

export default Experts;
