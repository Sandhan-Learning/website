import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/webpage.css";
import sandhan_logo from "../images/Logos/sandhan_logo.png";
import personality_illustration from "../images/personality_illustration.svg";

class Navbar extends React.Component {
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
								<a href='/' class='nav-link transition'>
									HOME
								</a>
							</li>
							<li class='nav-item'>
								<a href='/about' class='nav-link transition'>
									ABOUT US
								</a>
							</li>
							<li class='nav-item'>
								<a href='/experts' class='nav-link transition'>
									EXPERTS
								</a>
							</li>
							<li class='nav-item'>
								<a href='/' class='nav-link'>
									COURSES
								</a>
								<ul>
									<li>
										<a
											href='student-courses'
											class='transition'
										>
											STUDENTS
										</a>
									</li>
									<li>
										<a
											href='/institute-courses'
											class='transition'
										>
											INSTITUTES
										</a>
									</li>
									<li>
										<a
											href='/corporate-courses'
											class='transition'
										>
											CORPORATE
										</a>
									</li>
								</ul>
							</li>
							<li class='nav-item'>
								<a href='/contact' class='nav-link transition'>
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
							<a href='/' class='transition'>
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
								<a href='/' class='nav-link transition'>
									HOME
								</a>
							</li>
							<li class='nav-item'>
								<a href='/about' class='nav-link transition'>
									ABOUT US
								</a>
							</li>
							<li class='nav-item'>
								<a href='/experts' class='nav-link transition'>
									EXPERTS
								</a>
							</li>
							<li class='nav-item'>
								<a href='/' class='nav-link'>
									COURSES
								</a>
								<ul>
									<li>
										<a
											href='/student-courses'
											class='transition'
										>
											STUDENTS
										</a>
									</li>
									<li>
										<a
											href='/institute-courses'
											class='transition'
										>
											INSTITUTES
										</a>
									</li>
									<li>
										<a
											href='/corporate-courses'
											class='transition'
										>
											CORPORATE
										</a>
									</li>
								</ul>
							</li>
							<li class='nav-item'>
								<a href='/contact' class='nav-link transition'>
									CONTACT US
								</a>
							</li>
						</ul>
					</nav>
					{this.props.children}
				</header>
			</>
		);
	}
}

export default Navbar;
