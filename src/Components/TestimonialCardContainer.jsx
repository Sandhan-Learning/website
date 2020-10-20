import React from "react";
import "./testimonial-card-container.css";
import TestimonialCard from "./TestimonialCard";

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

class TestimonialCardContainer extends React.Component {
	constructor() {
		super();
		this.bulletRef = React.createRef();
		this.handleBulletClick = this.handleBulletClick.bind(this);
	}

	componentDidMount() {
		document.querySelectorAll(".bullet-item")[0].classList.add("selected");
		document
			.querySelectorAll(".testimonial-item")[0]
			.classList.add("selected");
	}

	handleBulletClick() {}

	render() {
		return (
			<div class='testimonial-wrapper'>
				<h2>
					<em>Testimonials</em> What people say about us
				</h2>
				<ul class='testimonial-list rel-wrapper no-margin'>
					{testimonyData.map((testimonial) => (
						<TestimonialCard
							testimonyHeading={testimonial["testimonyHeading"]}
							testimony={testimonial["testimony"]}
							customerName={testimonial["customerName"]}
							customerTitle={testimonial["customerTitle"]}
						/>
					))}
				</ul>
				<ul class='bullet-list'>
					{testimonyData.map(() => (
						<li class='bullet-item' ref={this.bulletRef}></li>
					))}
				</ul>
			</div>
		);
	}
}

export default TestimonialCardContainer;
