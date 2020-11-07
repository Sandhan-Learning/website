import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper.scss";
import "./styles/test.css";
import CourseCard from "./CourseCard";
import fire from "../firebaseIndex";
const Test = () => {
	let tempState = [];
	const courseMetaDataRef = fire.database().ref("courseMetaData");

	courseMetaDataRef.on("value", (snapshot) => {
		let coursesMeta = snapshot.val();
		for (let course in coursesMeta) {
			tempState.push({
				courseId: coursesMeta[course].courseId,
				courseName: coursesMeta[course].courseName,
				courseImg: coursesMeta[course].courseImg,
				courseDescription: coursesMeta[course].courseDescription,
				courseInstructorName: coursesMeta[course].courseInstructorName,
				courseRating: coursesMeta[course].courseRating,
				coursePrice: coursesMeta[course].coursePrice,
			});
		}
	});

	const swiper = useRef(null);
	useEffect(() => {
		swiper.current = new Swiper(".swiper-container", {
			observer: true,
			observeParents: true,
			loop: true,
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		//add necessary parameters required by checking the offical docs of swiper
	}, []);

	swiper.update();
	return (
		<div className='swiper-container'>
			<div className='swiper-wrapper'>
				{tempState.map((course) => (
					<div className='swiper-slide'>
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
					</div>
				))}
				<div className='swiper-slide'>
					<CourseCard
						courseId='5'
						courseName='Walkin Placement Training'
						courseImg='https://i.pinimg.com/originals/fe/45/86/fe4586e100b6772e65c12a95048803ae.jpg'
						courseDescription='3 Months training program with job orientation for pass out students or students who are looking for better jobs.'
						courseInstructorName='Instructor'
						courseRating='Rating'
						coursePrice=' '
					/>
				</div>
			</div>
		</div>
	);
};

export default Test;
