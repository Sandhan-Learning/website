import React from "react";
import fire from "../firebaseIndex";
import "./styles/footer.css";
import contact_icon01 from "../images/contact-icon01.png";
import contact_icon02 from "../images/contact-icon02.png";
import contact_icon03 from "../images/contact-icon03.png";
import contact_icon04 from "../images/contact-icon04.png";
import sandhan_logo from "../images/Logos/sandhan_logo.png";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			footerContactData: "",
			footerData: "",
		};
	}

	componentDidMount() {
		const footerContactRef = fire.database().ref("footerContact");

		footerContactRef.on("value", (snapshot) => {
			this.setState({ footerContactData: snapshot.val() }, () => {});
		});

		const footerRef = fire.database().ref("footer");

		footerRef.on("value", (snapshot) => {
			this.setState({ footerData: snapshot.val() }, () => {});
		});
	}

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
								<h4>E-MAIL</h4>
								<address>Education.sandhan@gmail.com</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon02} alt='Image'></img>
								</figure>
								<h4>PHONE</h4>
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
									Arcon Heights, Gothapatna, BBSR{" "}
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
										<a
											target='_blank'
											href='https://m.facebook.com/Sandhanlearning/'
										>
											<i class='fa fa-facebook fa-2x'></i>
										</a>
									</li>
									<li>
										<a target='_blank' href=''>
											<i class='fa fa-youtube fa-2x'></i>
										</a>
									</li>
									<li>
										<a
											target='_blank'
											href='https://t.me/sandhanlearning'
										>
											<i class='fa fa-telegram fa-2x'></i>
										</a>
									</li>
									<li>
										<a
											target='_blank'
											href='https://instagram.com/sandhanlearnings?igshid=43la6q8yr0ey'
										>
											<i class='fa fa-instagram fa-2x'></i>
										</a>
									</li>
									<li>
										<a
											target='_blank'
											href='https://www.linkedin.com/in/sandhan-education-056705184'
										>
											<i class='fa fa-linkedin fa-2x'></i>
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

export default Footer;
