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
		testimonyHeading: "Need of the hour.",
		testimony:
			"Congratulations to the Chanakya Team for changing the Education Framework. The  curriculum is well designed keeping in mind the requirements of the market, so that the Student doesn't get lost or feel out off track for the Job. Such a curriculum is the need of the hour. We need such curriculums which will make the students competitive and eligible for the job at the same time. My best wishes with the team.",
		customerName: "Mrunalini",
		customerTitle: "Academic Head, Pune",
	},
	{
		testimonyHeading: "Setting right bars.",
		testimony:
			"Currently automobile industry is undergoing transformation and expecting to seek skilled employees rather than earlier phase of head counts. Inspired to see that Sandhan Learning is setting right bars and platforms to grow quality over the crowded headcount.",
		customerName: "Suman Kumar",
		customerTitle:
			"Regional Training Manager, Nissan Motors India Pvt Ltd ",
	},
	{
		testimonyHeading: "Game Changer.",
		testimony:
			"Congrats and best wishes- I think this is really a game changer in the field of education where focus is not just on knowledge but also on skills development where most engineering institutions are lagging behind in India.",
		customerName: "Harshit",
		customerTitle: "Lead Consultant, Saksoft Limited ",
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
