import React from "react";
import "./course-card.css";

class CourseCardFront extends React.Component {
	render() {
		return (
			<div class='side card-front'>
				<img src={this.props.courseImg} alt={this.props.courseId}></img>
				<div class='info'>
					<h2>{this.props.courseName}</h2>
					<p>{this.props.courseDescription}</p>
				</div>
			</div>
		);
	}
}

class CourseCardBack extends React.Component {
	render() {
		return (
			<div class='side card-back'>
				<div class='info'>
					<h2>{this.props.courseInstructorName}</h2>
					<div class='reviews'>
						<p>{this.props.courseRating}</p>
					</div>
					<ul>
						{/* {Object.keys(this.props.courseFeature).map((key) => (
							<p>{this.props.courseFeature[key]}</p>
						))} */}
					</ul>
					<h3>{this.props.coursePrice}</h3>
					<div class='btn'>
						<h4>Learn More</h4>
					</div>
				</div>
			</div>
		);
	}
}

class CourseCard extends React.Component {
	constructor() {
		super();
		this.myRef = React.createRef();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isTop: true,
		};
	}

	handleClick() {
		if (this.myRef.current.classList.contains("active")) {
			this.myRef.current.classList.remove("active");
		} else {
			this.myRef.current.classList.add("active");
		}
	}

	render() {
		return (
			<>
				<div class='cardContainer inactive'>
					<div
						class='card'
						onClick={this.handleClick}
						ref={this.myRef}
					>
						<CourseCardFront
							courseId={this.props.courseId}
							courseName={this.props.courseName}
							courseImg={this.props.courseImg}
							courseDescription={this.props.courseDescription}
						/>
						<CourseCardBack
							courseInstructorName={
								this.props.courseInstructorName
							}
							courseRating={this.props.courseRating}
							coursePrice={this.props.coursePrice}
						/>
					</div>
				</div>
			</>
		);
	}
}

export default CourseCard;
