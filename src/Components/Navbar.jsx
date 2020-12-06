import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/navbar.css";
import sandhan_logo from "../images/Logos/sandhan_logo.png";
import personality_illustration from "../images/personality_illustration.svg";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	constructor() {
		super();
		this.hamburgerReveal = this.hamburgerReveal.bind(this);
	}

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
	}

	hamburgerReveal() {
		var hamburger_menu = document.querySelector(".hamburger-menu");
		var hamburger_menu_box = document.querySelector(".hamburger-menu-box");

		hamburger_menu.classList.toggle("open");
		hamburger_menu_box.classList.toggle("show-me");
	}

	render() {
		console.log(this.props.videobg);
		return (
			<>
				<div class='transition-overlay'></div>
				<aside class='hamburger-menu-box'>
					<div class='menu'>
						<ul class='navbar-nav'>
							<li class='nav-item'>
								<Link class='nav-link transition' to='/'>
									HOME
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link transition' to='/about'>
									ABOUT US
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link transition' to='/experts'>
									EXPERTS
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='transition' to='/student-courses'>
									STUDENTS
								</Link>
							</li>
							<li>
								<Link
									class='transition'
									to='/institute-courses'
								>
									INSTITUTES
								</Link>
							</li>
							<li>
								<Link
									class='transition'
									to='/corporate-courses'
								>
									CORPORATE
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link transition' to='/'>
									CAREERS
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link transition' to='/contact'>
									CONTACT US
								</Link>
							</li>
						</ul>
					</div>
				</aside>
				<header class='header'>
					{this.props.videobg}
					<nav class='navbar'>
						<div class='logo'>
							<Link to='/' class='transition'>
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
							</Link>
						</div>

						<div
							class='hamburger-menu'
							onClick={this.hamburgerReveal}
						>
							<span></span> <span></span> <span></span>
						</div>
						<a href='#'>
							{/* Update career link later */}
							<Link to='' class='custom-btn'>
								CAREERS
							</Link>
						</a>
						<ul class='navbar-nav'>
							<li class='nav-item'>
								<Link class='nav-link transition' to='/'>
									HOME
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link transition' to='/about'>
									ABOUT US
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link transition' to='/experts'>
									EXPERTS
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' to='/'>
									PROGRAMS
								</Link>
								<ul>
									<li>
										<Link
											class='transition'
											to='/student-courses'
										>
											STUDENTS
										</Link>
									</li>
									<li>
										<Link
											class='transition'
											to='/institute-courses'
										>
											INSTITUTES
										</Link>
									</li>
									<li>
										<Link
											class='transition'
											to='/corporate-courses'
										>
											CORPORATE
										</Link>
									</li>
								</ul>
							</li>
							<li class='nav-item'>
								<Link class='nav-link transition' to='/contact'>
									CONTACT US
								</Link>
							</li>
						</ul>
					</nav>
					{this.props.inner}
				</header>
			</>
		);
	}
}

export default Navbar;
