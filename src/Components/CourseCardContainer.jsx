import React from "react";
import CourseCard from "./CourseCard";
import "./course-card-container.css";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const courseData = [
	{
		courseId: 1,
		courseName: "Computer Vision",
		courseImg:
			"https://i.pinimg.com/originals/e7/e1/ab/e7e1ab74164d65f632220bc32beab640.jpg",
		courseDescription:
			"Learn the fundamentals of Artificial Intelligence & design intelligent agents to solve real world problems including games & constraint satisfaction problems.",
		courseInstructorName: "Lex Fridman",
		courseRating: "4.71",
		coursePrice: "Rs 3999",
	},
	{
		courseId: 2,
		courseName: "Linear Algebra",
		courseImg:
			"https://i.pinimg.com/originals/fe/45/86/fe4586e100b6772e65c12a95048803ae.jpg",
		courseDescription:
			"This is a basic subject on matrix theory and linear algebra. Emphasis is given to topics like systems of equations, vector spaces, determinants and eigenvalues.",
		courseInstructorName: "Gilbert Strang",
		courseRating: "4.94",
		coursePrice: "Rs 1999",
	},
	{
		courseId: 3,
		courseName: "Computer Vision",
		courseImg:
			"https://i.pinimg.com/originals/e7/e1/ab/e7e1ab74164d65f632220bc32beab640.jpg",
		courseDescription:
			"Learn the fundamentals of Artificial Intelligence & design intelligent agents to solve real world problems including games & constraint satisfaction problems.",
		courseInstructorName: "Lex Fridman",
		courseRating: "4.71",
		coursePrice: "Rs 3999",
	},
	{
		courseId: 4,
		courseName: "Linear Algebra",
		courseImg:
			"https://i.pinimg.com/originals/fe/45/86/fe4586e100b6772e65c12a95048803ae.jpg",
		courseDescription:
			"This is a basic subject on matrix theory and linear algebra. Emphasis is given to topics like systems of equations, vector spaces, determinants and eigenvalues.",
		courseInstructorName: "Gilbert Strang",
		courseRating: "4.94",
		coursePrice: "Rs 1999",
	},
	{
		courseId: 5,
		courseName: "Computer Vision",
		courseImg:
			"https://i.pinimg.com/originals/e7/e1/ab/e7e1ab74164d65f632220bc32beab640.jpg",
		courseDescription:
			"Learn the fundamentals of Artificial Intelligence & design intelligent agents to solve real world problems including games & constraint satisfaction problems.",
		courseInstructorName: "Lex Fridman",
		courseRating: "4.71",
		coursePrice: "Rs 3999",
	},
	{
		courseId: 6,
		courseName: "Linear Algebra",
		courseImg:
			"https://i.pinimg.com/originals/fe/45/86/fe4586e100b6772e65c12a95048803ae.jpg",
		courseDescription:
			"This is a basic subject on matrix theory and linear algebra. Emphasis is given to topics like systems of equations, vector spaces, determinants and eigenvalues.",
		courseInstructorName: "Gilbert Strang",
		courseRating: "4.94",
		coursePrice: "Rs 1999",
	},
];

class CourseCardContainer extends React.Component {
	render() {
		return (
			<Swiper
				className='swiper-container'
				spaceBetween={50}
				slidesPerView={5}
				slidesPerGroup={5}
				navigation
				// pagination={{ clickable: true }}
				// loop={true}
				// scrollbar={{ draggable: true }}
				preloadImages={true}
				updateOnImagesReady={true}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				breakpoints={{
					"@0.75": {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					"@1.00": {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					"@1.50": {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
			>
				{courseData.map((course) => (
					<SwiperSlide key={course["courseId"]}>
						<CourseCard
							courseId={course["courseId"]}
							courseName={course["courseName"]}
							courseImg={course["courseImg"]}
							courseDescription={course["courseDescription"]}
							courseInstructorName={
								course["courseInstructorName"]
							}
							courseRating={course["courseRating"]}
							coursePrice={course["coursePrice"]}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		);
	}
}

export default CourseCardContainer;
