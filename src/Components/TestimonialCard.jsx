import React from "react";
import "./testimonial-card.css";

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

export default TestimonialCard;
