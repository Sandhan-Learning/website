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
								<address>
									{this.state.footerContactData.email}
								</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon02} alt='Image'></img>
								</figure>
								<h4>PHONE</h4>
								<address>
									{this.state.footerContactData.phone}
								</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon03} alt='Image'></img>
								</figure>
								<h4>SUPPORT</h4>
								<address>
									{this.state.footerContactData.time}
								</address>
							</div>

							<div class='col-lg-3 col-md-6'>
								<figure>
									<img src={contact_icon04} alt='Image'></img>
								</figure>
								<h4>LOCATION</h4>
								<address>
									{this.state.footerContactData.location}
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
								<p>{this.state.footerData.para}</p>

								<ul>
									<li>
										<a
											target='_blank'
											href={
												this.state.footerData
													.promoFacebook
											}
										>
											<i class='fa fa-facebook fa-2x'></i>
										</a>
									</li>
									<li>
										<a
											target='_blank'
											href={
												this.state.footerData
													.promoYoutube
											}
										>
											<i class='fa fa-youtube fa-2x'></i>
										</a>
									</li>
									<li>
										<a
											target='_blank'
											href={
												this.state.footerData
													.promoTelegram
											}
										>
											<i class='fa fa-telegram fa-2x'></i>
										</a>
									</li>
									<li>
										<a
											target='_blank'
											href={
												this.state.footerData
													.promoInstagram
											}
										>
											<i class='fa fa-instagram fa-2x'></i>
										</a>
									</li>
									<li>
										<a
											target='_blank'
											href={
												this.state.footerData
													.promoLinkedin
											}
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
