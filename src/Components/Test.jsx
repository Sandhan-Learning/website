import React from "react";
import "./styles/test.css";

class Test extends React.Component {
	render() {
		return (
			<div class='course-wrapper white-bg mb-50'>
				<div class='course-inner'>
					<div class='course-img pos-rel mb-25'>
						<a href=''>
							<img src={this.props.courseImg} alt='' />
						</a>
					</div>
					<div class='course-text'>
						<div class='course-cat-meta d-flex align-items-center mb-15'>
							<span>
								<a href=''>STUDENT</a>
							</span>
							<div class='review-icon'>
								<a href='#'>
									<i class='fa fa-star'></i>
								</a>
								<a href='#'>
									<i class='fa fa-star'></i>
								</a>
								<a href='#'>
									<i class='fa fa-star'></i>
								</a>
								<a href='#'>
									<i class='fa fa-star'></i>
								</a>
								<a href='#'>
									<i class='fa fa-star'></i>
								</a>
							</div>
						</div>

						<h4 class='semi-title pb-10 mb-10'>
							<a href=''>{this.props.courseName}</a>
						</h4>
						<div class='course-meta'>
							<p>{this.props.courseDescription2}</p>
						</div>
					</div>
				</div>
				<div class='course-text course-text-02 theme-bg'>
					<h4 class='semi-title mb-20'>
						<a style={{ textDecoration: "none", color: "#fff" }}>
							{this.props.courseName}
						</a>
					</h4>

					<p class='pb-10 mb-10'>{this.props.courseDescription}</p>
					<p class='pb-10 mb-10'>{this.props.courseDescription2}</p>
					<a
						class='c-btn mb-40'
						href={this.props.enrollLink}
						style={{ textDecoration: "none" }}
					>
						get enrolled <i class='fa fa-arrow-right'></i>
					</a>
				</div>
			</div>
		);
	}
}

export default Test;
