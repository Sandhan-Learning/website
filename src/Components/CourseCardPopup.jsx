import React from "react";
import "./styles/course-card-popup.css";

class CourseCardPopup extends React.Component {
	componentDidMount() {
		document.querySelector(".notPopup").style.opacity = 0.1;
	}
	componentWillUnmount() {
		document.querySelector(".notPopup").style.opacity = 1;
	}
	render() {
		return (
			<>
				<figure class='card-popup'>
					<img src={this.props.courseImg} alt='Popup Card' />
					<figcaption>
						<h2>{this.props.courseName}</h2>
						<p>{this.props.courseDescription}</p>
						<a href='#'>Learn More</a>
					</figcaption>
					<a href={this.props.courseEnrollURL} class='read-more'>
						Enroll Now
					</a>
				</figure>
			</>
		);
	}
}

export default CourseCardPopup;
