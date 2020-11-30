import React from "react";
import "./styles/navbar.css";
import personality_illustration from "../images/personality_illustration.svg";
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
					autoplay={{ delay: 5000, disableOnInteraction: true }}
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
									Learn from Industry Experts for a better
									career with our flagship program Chanakya
								</h2>
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
									<span>Enroll Now</span>
								</a>
							</div>
							<div class='illustration'>
								<img
									src={personality_illustration}
									alt='Image'
								></img>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide style={{ marginTop: "-100px" }}>
						<div class='header'>
							<div class='inner'>
								<h2>
									Get ready to crack your interviews with our
									program Pre-Placement Training
								</h2>
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
									<span>Enroll Now</span>
								</a>
							</div>
							<div class='illustration'>
								<img
									src={interview_illustration}
									alt='Image'
								></img>
							</div>
						</div>
					</SwiperSlide>{" "}
				</Swiper>
			</>
		);
	}
}

export default HomeSlider;
