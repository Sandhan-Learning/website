import React from "react";
import "./testimonial-card.css";
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

const testimonyData = [
	{
		testimonyHeading: "I Am Not A Bad Person.",
		testimony:
			"I am not a bad person. When I left Staples, I took some of their leads with me, but I never intended to use them. What did I intend to do with them? Who knows. Maybe keep them as a souvenir. Maybe use them.",
		customerName: "Dwight Shrute",
		customerTitle: "Assistant to the Regional Manager, Dunder Mifflin",
	},
	{
		testimonyHeading: "The best solution for distance learning.",
		testimony:
			"I started at stage zero. With Chanakya I was able to start learning online and eventually build up enough knowledge and skills to transition into a well paying carrer.",
		customerName: "Michael Scott",
		customerTitle: "Regional Manager, Dunder Mifflin",
	},
];

class TestimonialCard extends React.Component {
	render() {
		return (
			<>
				<li class='testimonial-item'>
					<img
						src='https://res.cloudinary.com/ratzydev/image/upload/v1542298371/codevember-day-15/quote.png'
						alt='Quotation'
						class='quotation'
					></img>
					<h3 class='heading'>
						<em>{this.props.testimonyHeading}</em>
					</h3>
					<p class='para'>
						<em>{this.props.testimony}</em>
					</p>
					<div class='testimonials-by'>
						<h4 class='name'>
							<em>{this.props.customerName}</em>
						</h4>
						<span class='designation'>
							<em>{this.props.customerTitle}</em>
						</span>
					</div>
				</li>
			</>
		);
	}
}

class TestimonialCardContainer extends React.Component {
	render() {
		return (
			<>
				<div class='testimonial-wrapper rel-wrapper no-margin'>
					<Swiper
						className='swiper-container'
						spaceBetween={50}
						slidesPerView={1}
						loop={true}
						autoplay={{ delay: 5000, disableOnInteraction: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						{testimonyData.map((testimonial, index) => (
							<SwiperSlide key={index}>
								<TestimonialCard
									testimonyHeading={
										testimonial["testimonyHeading"]
									}
									testimony={testimonial["testimony"]}
									customerName={testimonial["customerName"]}
									customerTitle={testimonial["customerTitle"]}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</>
		);
	}
}

export default TestimonialCardContainer;
