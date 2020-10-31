import React from "react";
import TestimonialCardContainer from "./TestimonialCardContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "./Accordion";
import "./FAQ.css";
import "./webpage.css";
import contact_icon01 from "../images/contact-icon01.png";
import contact_icon02 from "../images/contact-icon02.png";
import contact_icon03 from "../images/contact-icon03.png";
import contact_icon04 from "../images/contact-icon04.png";
import sandhan_logo from "../images/Logos/sandhan_logo.png";
import CourseCardContainer from "./CourseCardContainer";
import personality_illustration from "../images/personality_illustration.svg";
import reading_illustration from "../images/reading_illustration.svg";
import Uniqueness from "./Uniqueness";
import ashok_leyland_logo from "../images/Logos/ashok-leyland.png";
import cummins_logo from "../images/Logos/cummins.png";
import hero_logo from "../images/Logos/hero.jpg";
import icici_logo from "../images/Logos/icici.jpg";
import mahindra_logo from "../images/Logos/mahindra.jpg";
import maruti_suzuki_logo from "../images/Logos/maruti-suzuki.jpg";
import mercedes_benz_logo from "../images/Logos/mercedes-benz.png";
import nissan_logo from "../images/Logos/nissan.jpg";
import tata_steel_logo from "../images/Logos/tata_steel.jpg";
import tata_logo from "../images/Logos/tata.jpg";
import indusind_logo from "../images/Logos/indusind.jpg";
import vedanta_logo from "../images/Logos/vedanta.png";

class Header extends React.Component {
	constructor() {
		super();
		this.hamburgerReveal = this.hamburgerReveal.bind(this);
	}

	hamburgerReveal() {
		var hamburger_menu = document.querySelector(".hamburger-menu");
		var hamburger_menu_box = document.querySelector(".hamburger-menu-box");

		hamburger_menu.classList.toggle("open");
		hamburger_menu_box.classList.toggle("show-me");
	}

	render() {
		return (
			<>
				<div class='transition-overlay'></div>
				<aside class='hamburger-menu-box'>
					<div class='menu'>
						<ul class='navbar-nav'>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									HOME
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									ABOUT US
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									EXPERTS
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link'>
									COURSES
								</a>
								<ul>
									<li>
										<a href='#' class='transition'>
											STUDENTS
										</a>
									</li>
									<li>
										<a href='#' class='transition'>
											INSTITUTES
										</a>
									</li>
									<li>
										<a href='#' class='transition'>
											CORPORATE
										</a>
									</li>
								</ul>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									CONTACT US
								</a>
							</li>
						</ul>
					</div>
					<div class='inner'>
						<h2>TOGETHER AT SANDHAN</h2>
						<br></br>
						<p>
							No global movement springs from individuals. It
							takes an entire team united behind something big.
							Together we work hard, we laugh a lot, we brainstorm
							non stop, we use hundreds of Post-Its a week, and we
							give the best high-fives in town.
						</p>
						<p>
							It’s an audacious, incredibly rewarding mission that
							our increasingly diverse team is dedicated to
							achieving.
						</p>
						<p>
							Exciting challenges lie ahead—new regions,
							technologies, and businesses. Guided by our core
							values, we’ll meet these challenges creatively and
							with the support of our community. Join us!
						</p>
						<br></br>
						<a href='#' class='ghost-btn'>
							<svg>
								<rect
									width='206'
									height='50'
									x='5'
									y='5'
									rx='25'
									fill='none'
									stroke='#2F2E41'
								></rect>
							</svg>
							<span>Join Us!</span>
						</a>
					</div>
				</aside>
				<header class='header'>
					<nav class='navbar'>
						<div class='logo'>
							<a href='#' class='transition'>
								<img
									src={sandhan_logo}
									alt='Image'
									class='logo-light'
								></img>
								<img
									src={sandhan_logo}
									alt='Image'
									class='logo-colored'
								></img>
							</a>
						</div>

						<div
							class='hamburger-menu'
							onClick={this.hamburgerReveal}
						>
							<span></span> <span></span> <span></span>
						</div>

						<ul class='navbar-nav'>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									HOME
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									ABOUT US
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									EXPERTS
								</a>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link'>
									COURSES
								</a>
								<ul>
									<li>
										<a href='#' class='transition'>
											STUDENTS
										</a>
									</li>
									<li>
										<a href='#' class='transition'>
											INSTITUTES
										</a>
									</li>
									<li>
										<a href='#' class='transition'>
											CORPORATE
										</a>
									</li>
								</ul>
							</li>
							<li class='nav-item'>
								<a href='#' class='nav-link transition'>
									CONTACT US
								</a>
							</li>
						</ul>
					</nav>
					<div id='light'>
						<a class='boxclose' id='boxclose'></a>
						<video id='Video' width='900px'>
							<source
								src='https://www.googleapis.com/drive/v3/files/1pv2bnhYCQPluu24_54p7HHxW6x3hSNZe?alt=media&key=AIzaSyAuT4romdlgsj6PUHK2xoijJc2QU7NDyKk'
								type='video/mp4'
							></source>
						</video>
					</div>
					<div class='inner'>
						<h2>Learn from industry experts for a better career</h2>
						<a href='#' class='ghost-btn'>
							<svg>
								<defs>
									<linearGradient>
										<stop
											offset='0%'
											stop-color='#FF8282'
										/>
										<stop
											offset='100%'
											stop-color='#E178ED'
										/>
									</linearGradient>
								</defs>
								<rect
									width='206'
									height='50'
									x='5'
									y='5'
									rx='25'
									fill='none'
									stroke='#0F5AF2'
								></rect>
							</svg>
							<span>Enroll Now</span>
						</a>
					</div>
					<div class='illustration'>
						<img src={personality_illustration} alt='Image'></img>
					</div>
				</header>
			</>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<>
				<section class='footer-bar'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon01} alt='Image'></img>
								</figure>
								<h4>E-MAILS</h4>
								<address>Education.sandhan@gmail.com</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon02} alt='Image'></img>
								</figure>
								<h4>PHONES</h4>
								<address>+91 7978349894</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon03} alt='Image'></img>
								</figure>
								<h4>SUPPORT</h4>
								<address>Mon to Fri 09:00am to 04:00pm</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon04} alt='Image'></img>
								</figure>
								<h4>LOCATION</h4>
								<address>
									Arcon Heights, Gothapatna, BBSR
								</address>
							</div>
						</div>
					</div>
				</section>
				<footer class='footer'>
					<div class='container'>
						<div class='row'>
							<div class='col-12'>
								<img
									src={sandhan_logo}
									alt='Image'
									class='logo'
								></img>
								<p>
									Sandhan Learning is based on the principles
									of Dr. APJ Abdul Kalam and dedicated towards
									improvement <br></br>of education quality
									and to start experimental learning among
									youths for 100% development to make self
									reliant India.
								</p>

								<ul>
									<li>
										<a href='#'>
											<img src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNjEyLDExNi4yNThjLTIyLjUyNSw5Ljk4MS00Ni42OTQsMTYuNzUtNzIuMDg4LDE5Ljc3MmMyNS45MjktMTUuNTI3LDQ1Ljc3Ny00MC4xNTUsNTUuMTg0LTY5LjQxMSAgICBjLTI0LjMyMiwxNC4zNzktNTEuMTY5LDI0LjgyLTc5Ljc3NSwzMC40OGMtMjIuOTA3LTI0LjQzNy01NS40OS0zOS42NTgtOTEuNjMtMzkuNjU4Yy02OS4zMzQsMC0xMjUuNTUxLDU2LjIxNy0xMjUuNTUxLDEyNS41MTMgICAgYzAsOS44MjgsMS4xMDksMTkuNDI3LDMuMjUxLDI4LjYwNkMxOTcuMDY1LDIwNi4zMiwxMDQuNTU2LDE1Ni4zMzcsNDIuNjQxLDgwLjM4NmMtMTAuODIzLDE4LjUxLTE2Ljk4LDQwLjA3OC0xNi45OCw2My4xMDEgICAgYzAsNDMuNTU5LDIyLjE4MSw4MS45OTMsNTUuODM1LDEwNC40NzljLTIwLjU3NS0wLjY4OC0zOS45MjYtNi4zNDgtNTYuODY3LTE1Ljc1NnYxLjU2OGMwLDYwLjgwNiw0My4yOTEsMTExLjU1NCwxMDAuNjkzLDEyMy4xMDQgICAgYy0xMC41MTcsMi44My0yMS42MDcsNC4zOTgtMzMuMDgsNC4zOThjLTguMTA3LDAtMTUuOTQ3LTAuODAzLTIzLjYzNC0yLjMzM2MxNS45ODUsNDkuOTA3LDYyLjMzNiw4Ni4xOTksMTE3LjI1Myw4Ny4xOTQgICAgYy00Mi45NDcsMzMuNjU0LTk3LjA5OSw1My42NTUtMTU1LjkxNiw1My42NTVjLTEwLjEzNCwwLTIwLjExNi0wLjYxMi0yOS45NDQtMS43MjFjNTUuNTY3LDM1LjY4MSwxMjEuNTM2LDU2LjQ4NSwxOTIuNDM4LDU2LjQ4NSAgICBjMjMwLjk0OCwwLDM1Ny4xODgtMTkxLjI5MSwzNTcuMTg4LTM1Ny4xODhsLTAuNDIxLTE2LjI1M0M1NzMuODcyLDE2My41MjYsNTk1LjIxMSwxNDEuNDIyLDYxMiwxMTYuMjU4eiIgZmlsbD0iIzcyOTNiMyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' />
										</a>
									</li>
									<li>
										<a href='#'>
											<img src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDk2LjEyNCA5Ni4xMjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk2LjEyNCA5Ni4xMjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNzIuMDg5LDAuMDJMNTkuNjI0LDBDNDUuNjIsMCwzNi41Nyw5LjI4NSwzNi41NywyMy42NTZ2MTAuOTA3SDI0LjAzN2MtMS4wODMsMC0xLjk2LDAuODc4LTEuOTYsMS45NjF2MTUuODAzICAgYzAsMS4wODMsMC44NzgsMS45NiwxLjk2LDEuOTZoMTIuNTMzdjM5Ljg3NmMwLDEuMDgzLDAuODc3LDEuOTYsMS45NiwxLjk2aDE2LjM1MmMxLjA4MywwLDEuOTYtMC44NzgsMS45Ni0xLjk2VjU0LjI4N2gxNC42NTQgICBjMS4wODMsMCwxLjk2LTAuODc3LDEuOTYtMS45NmwwLjAwNi0xNS44MDNjMC0wLjUyLTAuMjA3LTEuMDE4LTAuNTc0LTEuMzg2Yy0wLjM2Ny0wLjM2OC0wLjg2Ny0wLjU3NS0xLjM4Ny0wLjU3NUg1Ni44NDJ2LTkuMjQ2ICAgYzAtNC40NDQsMS4wNTktNi43LDYuODQ4LTYuN2w4LjM5Ny0wLjAwM2MxLjA4MiwwLDEuOTU5LTAuODc4LDEuOTU5LTEuOTZWMS45OEM3NC4wNDYsMC44OTksNzMuMTcsMC4wMjIsNzIuMDg5LDAuMDJ6IiBmaWxsPSIjNzI5M2IzIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==' />
										</a>
									</li>
									<li>
										<a href='#'>
											<img src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzMsMTA5LjIwM2MtMTkuNjA4LTMzLjU5Mi00Ni4yMDUtNjAuMTg5LTc5Ljc5OC03OS43OTZDMjk1LjczNiw5LjgwMSwyNTkuMDU4LDAsMjE5LjI3MywwICAgYy0zOS43ODEsMC03Ni40Nyw5LjgwMS0xMTAuMDYzLDI5LjQwN2MtMzMuNTk1LDE5LjYwNC02MC4xOTIsNDYuMjAxLTc5LjgsNzkuNzk2QzkuODAxLDE0Mi44LDAsMTc5LjQ4OSwwLDIxOS4yNjcgICBjMCwzOS43OCw5LjgwNCw3Ni40NjMsMjkuNDA3LDExMC4wNjJjMTkuNjA3LDMzLjU5Miw0Ni4yMDQsNjAuMTg5LDc5Ljc5OSw3OS43OThjMzMuNTk3LDE5LjYwNSw3MC4yODMsMjkuNDA3LDExMC4wNjMsMjkuNDA3ICAgczc2LjQ3LTkuODAyLDExMC4wNjUtMjkuNDA3YzMzLjU5My0xOS42MDIsNjAuMTg5LTQ2LjIwNiw3OS43OTUtNzkuNzk4YzE5LjYwMy0zMy41OTYsMjkuNDAzLTcwLjI4NCwyOS40MDMtMTEwLjA2MiAgIEM0MzguNTMzLDE3OS40ODUsNDI4LjczMiwxNDIuNzk1LDQwOS4xMzMsMTA5LjIwM3ogTTIxOS4yNywzMS45NzdjNDcuMjAxLDAsODguNDEsMTUuNjA3LDEyMy42MjEsNDYuODJsLTMuNTY5LDQuOTkzICAgYy0xLjQyNywyLjAwMi00Ljk5Niw1Ljg1Mi0xMC43MDQsMTEuNTY1Yy01LjcwOSw1LjcwOC0xMS45NDMsMTEuMTM2LTE4LjY5OSwxNi4yNzRjLTYuNzYyLDUuMTQtMTUuOTQsMTAuOTkyLTI3LjU1NSwxNy41NTkgICBjLTExLjYxMSw2LjU2Ny0yMy45ODIsMTIuMzI4LTM3LjExNywxNy4yNzZjLTIxLjg4Ny00MC4zNTUtNDUuMjk2LTc2LjcwOS03MC4yMzEtMTA5LjA2NCAgIEMxOTAuMDU1LDMzLjc4NCwyMDQuODA1LDMxLjk3NywyMTkuMjcsMzEuOTc3eiBNNzIuNTI0LDEwMy4wNmMxOC4yNzEtMjMuMDI2LDQwLjUzNy00MC43Myw2Ni44MDYtNTMuMSAgIGMyMy42MDEsMzEuNDA1LDQ2LjgyLDY3LjM4MSw2OS42NjIsMTA3LjkyMWMtNTcuODYyLDE1LjIyNy0xMTUuNTMyLDIyLjg0MS0xNzMuMDE0LDIyLjgzOCAgIEM0Mi4wNzIsMTUxLjk4LDU0LjI1MywxMjYuMDkxLDcyLjUyNCwxMDMuMDZ6IE00NC41NCwyODYuNzk0Yy04LjM3Ni0yMS40MTItMTIuNTYzLTQzLjkyMy0xMi41NjMtNjcuNTI3ICAgYzAtMi42NjYsMC4wOTgtNC42NjUsMC4yODYtNS45OTZjNjguOTA1LDAsMTMyLjk1NS04Ljg0OCwxOTIuMTQ5LTI2LjU1M2M2LjA5MiwxMS44LDExLjEzNiwyMi4zNjQsMTUuMTMzLDMxLjY5MyAgIGMtMC43NzEsMC4zOC0xLjk5OSwwLjgwNi0zLjcxMywxLjI4M2MtMS43MTksMC40NzYtMi45NTMsMC44MDYtMy43MjEsMC45OTlsLTEwLjU2MSwzLjcxMSAgIGMtNy4yMzYsMi42NjYtMTYuNzA4LDcuMjM1LTI4LjQwOSwxMy43MDNjLTExLjcwNCw2LjQ3OC0yNC4xMjMsMTQuMTgyLTM3LjI1NywyMy4xM2MtMTMuMTM0LDguOTQ5LTI2LjY5NiwyMC43OTctNDAuNjg0LDM1LjU1MyAgIGMtMTMuOTksMTQuNzUtMjUuNzQzLDMwLjU5MS0zNS4yNiw0Ny41M0M2NC43MTMsMzI3LjM4MSw1Mi45MTQsMzA4LjIsNDQuNTQsMjg2Ljc5NHogTTIxOS4yNyw0MDYuNTYgICBjLTQ0LjU0LDAtODQuMzItMTQuMjc3LTExOS4zNDMtNDIuODI1bDQuMjgzLDMuMTQyYzYuNjYxLTE0LjY2LDE2LjQ2Mi0yOC43NDYsMjkuNDA4LTQyLjI1NyAgIGMxMi45NDQtMTMuNTExLDI1LjQxLTI0LjQxMywzNy40MDEtMzIuNjk1YzExLjk5MS04LjI3NCwyNS4wMjgtMTYuMDc3LDM5LjExNS0yMy40MTRjMTQuMDg0LTcuMzIzLDIzLjY5MS0xMS45OTEsMjguODM1LTEzLjk4MyAgIGM1LjE0LTEuOTk4LDkuMjMzLTMuNTcyLDEyLjI3OC00LjcxNmwwLjU2OC0wLjI4N2gwLjU3NWMxOC42NDcsNDguOTE2LDMxLjk3Nyw5Ni4zMTMsMzkuOTY4LDE0Mi4xODQgICBDMjY4Ljc1Niw0MDEuNjExLDI0NC4zOTcsNDA2LjU1NywyMTkuMjcsNDA2LjU2eiBNMzc2Ljg3NiwzMjAuNDc5Yy0xNC4wODYsMjEuNzk2LTMxLjY5NiwzOS44MzQtNTIuODE3LDU0LjEwNCAgIGMtNy44MS00My43NzYtMTkuOTg1LTg4LjQxNS0zNi41NDktMTMzLjkwMmMzNy44NzctNS45MDcsNzYuOC0zLjE0MiwxMTYuNzcxLDguMjc0ICAgQzQwMC4wOTIsMjc0Ljg0MSwzOTAuOTU1LDI5OC42ODcsMzc2Ljg3NiwzMjAuNDc5eiBNNDAzLjcwNiwyMTYuNjk4Yy0xLjkwMy0wLjM3OC00LjI4NS0wLjgxLTcuMTM5LTEuMjgzICAgYy0yLjg1NC0wLjQ3My02LjMzMS0xLjA0Ny0xMC40MjQtMS43MTNjLTQuMDg3LTAuNjY2LTguNjYyLTEuMjgzLTEzLjcwMi0xLjg1NWMtNS4wNDUtMC41NzEtMTAuNDIxLTEuMDkzLTE2LjEzNi0xLjU2OSAgIGMtNS43MDgtMC40NzgtMTEuOC0wLjg1NS0xOC4yNjgtMS4xNDNjLTYuNDc5LTAuMjg0LTEzLjA0Mi0wLjQyOC0xOS43MDUtMC40MjhjLTYuNjU2LDAtMTMuNjU3LDAuMTkzLTIwLjk4MSwwLjU3MSAgIGMtNy4zMjYsMC4zNzUtMTQuNDE0LDEuMDQ5LTIxLjI2NSwxLjk5OWMtMC41NzUtMC45NTMtMS4yODctMi41MjQtMi4xNDMtNC43MTRjLTAuODU1LTIuMTg3LTEuNDc5LTMuODU1LTEuODQ4LTQuOTk3ICAgYy0zLjYyMS03Ljk5NC03LjgxLTE3LjAzNi0xMi41NzMtMjcuMTIxYzEzLjEzNC01LjMzMywyNS42NTItMTEuNDY5LDM3LjU1NS0xOC40MThjMTEuODkyLTYuOTQ5LDIxLjQwMi0xMy4xMzEsMjguNTQ0LTE4LjU1NSAgIGM3LjEzOS01LjQzLDEzLjg5NS0xMS4xODgsMjAuMjctMTcuMjc3YzYuMzc5LTYuMDksMTAuNTEzLTEwLjMyMywxMi40MjMtMTIuNzAzYzEuOTA2LTIuMzg0LDMuNzEzLTQuNzE0LDUuNDI0LTYuOTk1bDAuMjg3LTAuMjg4ICAgYzI3Ljc4OCwzMy44OCw0MS45NzQsNzIuODk3LDQyLjUzOCwxMTcuMDU5TDQwMy43MDYsMjE2LjY5OHoiIGZpbGw9IiM3MjkzYjMiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K' />
										</a>
									</li>
									<li>
										<a href='#'>
											<img src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQzMC4xMTcgNDMwLjExNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDMwLjExNyA0MzAuMTE3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggaWQ9IkxpbmtlZEluIiBkPSJNNDMwLjExNywyNjEuNTQzVjQyMC41NmgtOTIuMTg4VjI3Mi4xOTNjMC0zNy4yNzEtMTMuMzM0LTYyLjcwNy00Ni43MDMtNjIuNzA3ICAgYy0yNS40NzMsMC00MC42MzIsMTcuMTQyLTQ3LjMwMSwzMy43MjRjLTIuNDMyLDUuOTI4LTMuMDU4LDE0LjE3OS0zLjA1OCwyMi40NzdWNDIwLjU2aC05Mi4yMTljMCwwLDEuMjQyLTI1MS4yODUsMC0yNzcuMzJoOTIuMjEgICB2MzkuMzA5Yy0wLjE4NywwLjI5NC0wLjQzLDAuNjExLTAuNjA2LDAuODk2aDAuNjA2di0wLjg5NmMxMi4yNTEtMTguODY5LDM0LjEzLTQ1LjgyNCw4My4xMDItNDUuODI0ICAgQzM4NC42MzMsMTM2LjcyNCw0MzAuMTE3LDE3Ni4zNjEsNDMwLjExNywyNjEuNTQzeiBNNTIuMTgzLDkuNTU4QzIwLjYzNSw5LjU1OCwwLDMwLjI1MSwwLDU3LjQ2MyAgIGMwLDI2LjYxOSwyMC4wMzgsNDcuOTQsNTAuOTU5LDQ3Ljk0aDAuNjE2YzMyLjE1OSwwLDUyLjE1OS0yMS4zMTcsNTIuMTU5LTQ3Ljk0QzEwMy4xMjgsMzAuMjUxLDgzLjczNCw5LjU1OCw1Mi4xODMsOS41NTh6ICAgIE01LjQ3Nyw0MjAuNTZoOTIuMTg0di0yNzcuMzJINS40NzdWNDIwLjU2eiIgZmlsbD0iIzcyOTNiMyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' />
										</a>
									</li>
								</ul>
								<small>
									© 2020 Sandhan Learning | All Rights
									Reserved.
								</small>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

class Homepage extends React.Component {
	componentDidMount() {
		window.onscroll = function () {
			myFunction();
		};
		var navbar = document.querySelector(".navbar");
		var sticky = navbar.offsetTop;

		function myFunction() {
			if (window.pageYOffset > sticky) {
				navbar.classList.add("stick-me");
			} else {
				navbar.classList.remove("stick-me");
			}
		}
		// document.body.onkeydown = function (e) {
		// 	if (!e) {
		// 		e = KeyboardEvent.key;
		// 	}
		// 	if (e.key == 27) {
		// 		lightbox_close();
		// 	}
		// };

		document.getElementById("fade").onclick = function () {
			lightbox_close();
		};
		document.getElementById("boxclose").onclick = function () {
			lightbox_close();
		};
		document.querySelector(".vidButton").onclick = function () {
			lightbox_open();
		};
		function lightbox_open() {
			var lightBoxVideo = document.getElementById("Video");
			window.scrollTo(0, 0);
			document.getElementById("light").style.display = "block";
			document.getElementById("fade").style.display = "block";
			lightBoxVideo.play();
		}

		function lightbox_close() {
			var lightBoxVideo = document.getElementById("Video");
			document.getElementById("light").style.display = "none";
			document.getElementById("fade").style.display = "none";
			lightBoxVideo.pause();
		}
	}

	render() {
		return (
			<>
				<div class='transition-overlay'></div>

				<Header />

				<section class='side-image-content'>
					<div class='side-image'>
						<img src={reading_illustration} alt='Image'></img>
					</div>

					<div class='side-content'>
						<div class='titles'>
							<span class='title-bg'></span>
							<h3>OUR VISION</h3>
						</div>
						<p>
							A Complete education means when someone knows how to
							utilize one’s{" "}
							<strong>mind, skills, thoughts, learnings</strong>{" "}
							and
							<strong> dreams</strong> in a systematic manner so
							that he/she would not be worried about unemployment
							and uncertainty of life & Career.
						</p>
						<p>
							In our flagship program we create a learning
							environment where every individual develops
							<strong>
								{" "}
								professionally, psychologically, economically
							</strong>{" "}
							and will be a valuable asset to the organization,
							society and the Nation.
						</p>
						<a href='#' class='ghost-btn'>
							<svg>
								<defs>
									<linearGradient id='grad1'>
										<stop
											offset='0%'
											stop-color='#FF8282'
										/>
										<stop
											offset='100%'
											stop-color='#E178ED'
										/>
									</linearGradient>
								</defs>
								<rect
									width='206'
									height='50'
									x='5'
									y='5'
									rx='25'
									fill='none'
									stroke='url(#grad1)'
								></rect>
							</svg>
							<span>Learn More +</span>
						</a>
					</div>
				</section>
				<section>
					<div>
						<h3 className='unique'>OUR UNIQUENESS</h3>
						<div>
							<Uniqueness />
						</div>
					</div>
				</section>
				<section>
					<div>
						<Accordion />
					</div>
				</section>
				<section class='main-features'>
					<div class='container'>
						<div class='row'>
							<div class='col-12'>
								<div class='titles'>
									<span class='title-bg'></span>
									<h3>OUR COURSES</h3>
								</div>
							</div>
						</div>
						<CourseCardContainer />
					</div>
				</section>
				<section class='clients'>
					<div class='container'>
						<div class='row'>
							<div class='col-12'>
								<div class='titles'>
									<span class='title-bg'></span>
									<h3>Our experts coaches are from</h3>
								</div>
								<ul>
									<li>
										<img
											src={ashok_leyland_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img
											src={cummins_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img src={hero_logo} alt='Image'></img>
									</li>
									<li>
										<img src={icici_logo} alt='Image'></img>
									</li>
									<li>
										<img
											src={tata_steel_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img
											src={mahindra_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img
											src={maruti_suzuki_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img src={tata_logo} alt='Image'></img>
									</li>
									<li>
										<img
											src={mercedes_benz_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img
											src={indusind_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img
											src={nissan_logo}
											alt='Image'
										></img>
									</li>
									<li>
										<img
											src={vedanta_logo}
											alt='Image'
										></img>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section class='main-features'>
					<div class='container'>
						<div class='titles'>
							<span class='title-bg'></span>
							<h3>TESTIMONIALS</h3>
						</div>
						<TestimonialCardContainer />
					</div>
				</section>
				<section class='quote-bar'>
					<div class='container'>
						<div class='row'>
							<div class='col-12'>
								<h4>LET'S WORK TOGETHER ?</h4>
								<p>
									Feel free to get in touch with us. We are
									always open to discussing new projects,
									creative ideas or opportunities to be a part
									of your visions.
								</p>

								<a href='#' class='ghost-btn vidButton'>
									<svg>
										<defs>
											<linearGradient>
												<stop
													offset='0%'
													stop-color='#FF8282'
												/>
												<stop
													offset='100%'
													stop-color='#E178ED'
												/>
											</linearGradient>
										</defs>
										<rect
											width='206'
											height='50'
											x='5'
											y='5'
											rx='25'
											fill='none'
											stroke='#ffffff'
										></rect>
									</svg>
									<span>WATCH</span>

									<div id='fade'></div>
								</a>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</>
		);
	}
}

export default Homepage;
