import React, { useState } from "react";
import CourseCardPopup from "./CourseCardPopup";
import "./Modal.css";

const courseData = [
	{
		courseId: 1,
		courseName: "Chanakya",
		courseImg:
			"https://i.pinimg.com/originals/e7/e1/ab/e7e1ab74164d65f632220bc32beab640.jpg",
		courseDescription: "For students of Graduation, Engineering and MBA.",
		courseInstructorName: "Instructor",
		courseRating: "Rating",
		coursePrice: "",
	},
	{
		courseId: 2,
		courseName: "Pre-Placement Training",
		courseImg:
			"https://i.pinimg.com/originals/e7/e1/ab/e7e1ab74164d65f632220bc32beab640.jpg",
		courseDescription:
			"15 Days, 30 Days and 3 Months comprehensive training program with campus placement orientation for students.",
	},
	{
		courseId: 3,
		courseName: "Walkin Placement Training",
		courseImg:
			"https://i.pinimg.com/originals/fe/45/86/fe4586e100b6772e65c12a95048803ae.jpg",
		courseDescription:
			"3 Months training program with job orientation for pass out students or students who are looking for better jobs.",
	},
];

function Modal() {
	const [show, setShow] = useState(false);

	const closeModalHandler = () => {
		setShow(true);
		document.querySelector(".header").style.opacity = 1;
	};

	return (
		<div>
			{show ? <div></div> : <ModalContainer close={closeModalHandler} />}
		</div>
	);
}

export const ModalContainer = ({ close }) => {
	return (
		<div className='modal-wrapper'>
			<div className='modal-header'>
				<p>Limited seats, Enroll Now!</p>
				<span onClick={close} className='close-modal-btn'>
					x
				</span>
			</div>
			<div className='modal-content'>
				<div className='modal-body'>
					<div className='popup'>
						{courseData.map((course) => (
							<CourseCardPopup
								courseId={course["courseId"]}
								courseName={course["courseName"]}
								courseImg={course["courseImg"]}
								courseDescription={course["courseDescription"]}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
