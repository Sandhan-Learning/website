import React from "react";
import CourseCard from "./CourseCard";
import Test from "./Test";
import "./styles/course-card-container.css";

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
		courseImg: "https://vinodg.me/Resources/5.png",
		courseDescription:
			"Learn from Industry experts from many domains and develop 360 degree skills and 100% employment.",
		courseDescription2: "For Graduation, Engineering and MBA.",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: "",
	},
	{
		courseId: 2,
		courseName: "Automobile Technology",
		courseImg: "https://vinodg.me/Resources/4.png",
		courseDescription:
			"Make yourself eligible for all the Automobile companies by learning everything about automobiles and Industry by Industry experts.",
		courseDescription2:
			"For engineering students with an interest in Automobile.",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: " ",
	},
	{
		courseId: 3,
		courseName: "Entrepreneurship",
		courseImg: "https://vinodg.me/Resources/3.png",
		courseDescription:
			"Learn everything about entrepreneurship by established entrepreneurs. Only program which offers complete entrepreneurship development.",
		courseDescription2: "For people aspiring to be Entrepreneurs",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: " ",
	},
	{
		courseId: 4,
		courseName: "Pre-Placement Training",
		courseImg: "https://vinodg.me/Resources/2.png",
		courseDescription:
			"Last step of education before the corporate life. Learn about recruitment by Industry experts and Crack your campus placements with confidence and higher packages.",
		courseDescription2: "Duration: 15 days, 30 days & 3 months",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: " ",
	},
	{
		courseId: 5,
		courseName: "Walkin Placement Training",
		courseImg: "https://vinodg.me/Resources/1.png",
		courseDescription:
			"Learn everything about Interviews by Human resource experts and crack jobs easily. The program offers 100% Job orientation..",
		courseDescription2:
			"Who can apply: People who are looking for better jobs.",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: " ",
	},
];

class CourseCardContainer extends React.Component {
	constructor() {
		super();
		this.prevRef = React.createRef();
		this.nextRef = React.createRef();
	}
	render() {
		return (
			<>
				<Swiper
					className='swiper-container'
					spaceBetween={10}
					slidesPerView={4}
					loop={true}
					autoplay={{ delay: 5000, disableOnInteraction: true }}
					// scrollbar={{ draggable: true }}
					// centeredSlides={true}
					pagination={{
						clickable: true,
					}}
					preloadImages={true}
					updateOnImagesReady={true}
					breakpoints={{
						"@0.50": {
							slidesPerView: 1,
						},
						"@0.75": {
							slidesPerView: 2,
						},
						"@1.00": {
							slidesPerView: 3,
						},
						"@1.50": {
							slidesPerView: 4,
						},
					}}
				>
					{courseData.map((course) => (
						<SwiperSlide key={course["courseId"]}>
							<Test
								courseId={course["courseId"]}
								courseName={course["courseName"]}
								courseImg={course["courseImg"]}
								courseDescription={course["courseDescription"]}
								courseDescription2={
									course["courseDescription2"]
								}
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
