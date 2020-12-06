import React from "react";
import ReactPlayer from "react-player";
import "./styles/navbar.css";
import personality_illustration from "../images/personality_illustration.svg";
import automobile_illustration from "../images/automobile_illustration.svg";
import walkin_illustration from "../images/walkin_illustration.svg";
import destiny_illustration from "../images/destiny_illustration.svg";
import interview_illustration from "../images/interview.svg";
import { Link } from "react-router-dom";

import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

class HomeSlider extends React.Component {
	render() {
		return (
			<>
				<Swiper
					className='swiper-container'
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 30000, disableOnInteraction: true }}
					// scrollbar={{ draggable: true }}
					// centeredSlides={true}
					pagination={{ clickable: true }}
					preloadImages={true}
					updateOnImagesReady={true}
				>
					<SwiperSlide style={{ marginTop: "-100px" }}>
						<div class='header'>
							<div class='inner'>
								<h2>
									Learn from Industry Experts and get 360
									degree skill development with 100%
									employment and a better career with our
									flagship program <strong>Chanakya</strong>
								</h2>

								<Link to='/chanakya' class='ghost-btn'>
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
							</div>
							<div class='illustration'>
								<ReactPlayer
									url='https://www.dailymotion.com/video/x7xvw5e'
									className='react-player'
									playing
									volume={0}
									loop
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide style={{ marginTop: "-100px" }}>
						<Slide
							text='Crack your campus placements with higher degree of confidence and packages with our'
							courseName='Pre-Placement Training Program'
							illustration={interview_illustration}
						/>
					</SwiperSlide>
					<SwiperSlide style={{ marginTop: "-100px" }}>
						<Slide
							text='Know everything about Automobile and its industry by automobile experts with our specially designed'
							courseName='Automobile Training Program'
							illustration={automobile_illustration}
						/>
					</SwiperSlide>
					<SwiperSlide style={{ marginTop: "-100px" }}>
						<Slide
							text='Don’t commit mistake in your journey to become entrepreneur. Learn everything about entrepreneurship by established entrepreneurs in our'
							courseName='Entrepreneurship Development Program'
							illustration={destiny_illustration}
						/>
					</SwiperSlide>
					<SwiperSlide style={{ marginTop: "-100px" }}>
						<Slide
							text='Don’t risk your career, learn how to crack jobs easily. Learn skills and procedures under one program in our specially designed training program for'
							courseName='Walk-in Interviews.'
							illustration={walkin_illustration}
						/>
					</SwiperSlide>
				</Swiper>
			</>
		);
	}
}

class Slide extends React.Component {
	render() {
		return (
			<div class='header'>
				<div class='inner'>
					<h2>
						{this.props.text}{" "}
						<strong>{this.props.courseName}</strong>
					</h2>
					<Link to='/chanakya' class='ghost-btn'>
						<svg>
							<defs>
								<linearGradient>
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
								stroke='#0F5AF2'
							></rect>
						</svg>
						<span>Enroll Now</span>
					</Link>
				</div>
				<div class='illustration'>
					<img src={this.props.illustration} alt='Image'></img>
				</div>
			</div>
		);
	}
}

export default HomeSlider;
