import React from "react";
import "./styles/ShareBar.css";

function ShareBar() {
	return (
		<label class='share-bar'>
			<input type='checkbox' />
			<div class='btn-share'>
				<i class='fa fa-share-alt'></i>
				<i class='fa fa-close'></i>
			</div>
			<div tabindex='1' class='share-list'>
				<ul>
					<li>
						<a
							target='_blank'
							href='https://m.facebook.com/Sandhanlearning/'
						>
							<i class='fa fa-facebook'></i>
						</a>
					</li>
					<li>
						<a target='_blank' href=''>
							<i class='fa fa-youtube'></i>
						</a>
					</li>
					<li>
						<a target='_blank' href='https://t.me/sandhanlearning'>
							<i class='fa fa-telegram'></i>
						</a>
					</li>
					<li>
						<a
							target='_blank'
							href='https://instagram.com/sandhanlearnings?igshid=43la6q8yr0ey'
						>
							<i class='fa fa-instagram'></i>
						</a>
					</li>
					<li>
						<a
							target='_blank'
							href='https://www.linkedin.com/in/sandhan-education-056705184'
						>
							<i class='fa fa-linkedin'></i>
						</a>
					</li>
				</ul>
			</div>
		</label>
	);
}

export default ShareBar;
