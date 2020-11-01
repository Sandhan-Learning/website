import React from "react";
import CourseCard from "./CourseCard";
import "./course-card-container.css";
import chankya_logo from "../images/Logos/chanakya.png"

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

const courseData = [
	{
		courseId: 1,
		courseName: "Chanakya",
		courseImg: chankya_logo,
		courseDescription:
			"For students of Graduation, Engineering and MBA.",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: "",
	},
	{
		courseId: 2,
		courseName: "Automobile Technology",
		courseImg:
			"https://i.pinimg.com/originals/e7/e1/ab/e7e1ab74164d65f632220bc32beab640.jpg",
		courseDescription:
			"For Engineering students with interest in Automobile.",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: " ",
	},
	{
		courseId: 3,
		courseName: "Entrepreneurship",
		courseImg:
			"https://i.pinimg.com/originals/fe/45/86/fe4586e100b6772e65c12a95048803ae.jpg",
		courseDescription:
			"Program for people looking to establish startups.",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: " ",
	},
	{
		courseId: 4,
		courseName: "Pre-Placement Training",
		courseImg:
			"https://i.pinimg.com/originals/e7/e1/ab/e7e1ab74164d65f632220bc32beab640.jpg",
		courseDescription:
			"15 Days, 30 Days and 3 Months comprehensive training program with campus placement orientation for students.",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: " ",
	},
	{
		courseId: 5,
		courseName: "Walkin Placement Training",
		courseImg:
			"https://i.pinimg.com/originals/fe/45/86/fe4586e100b6772e65c12a95048803ae.jpg",
		courseDescription:
			"3 Months training program with job orientation for pass out students or students who are looking for better jobs.",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: " ",
	},
];

class CourseCardContainer extends React.Component {
	render() {
		return (
			<>
				<Swiper
					className='swiper-container'
					slidesPerView={4}
					loop={true}
					autoplay={{ delay: 5000, disableOnInteraction: true }}
					// scrollbar={{ draggable: true }}
					// centeredSlides={true}
					preloadImages={true}
					updateOnImagesReady={true}
					breakpoints={{
						"@0.50": {
							slidesPerView: 1,
						},
						"@0.75": {
							slidesPerView: 1,
						},
						"@1.00": {
							slidesPerView: 2,
						},
						"@1.50": {
							slidesPerView: 4,
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
			</>
		);
	}
}

export default CourseCardContainer;
