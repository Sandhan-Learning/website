import React from "react";
import "./companies.css";

const companyData = [
	{
		companyName: "Facebook",
		companyLogo: "https://image.ibb.co/mOtHRw/fblogo.png",
	},
	{
		companyName: "Twitter",
		companyLogo: "https://image.ibb.co/nfpXRw/twitterlogo.png",
	},
	{
		companyName: "Google",
		companyLogo: "https://image.ibb.co/imgOYb/googlelogo.png",
	},
	{
		companyName: "Instagram",
		companyLogo: "https://image.ibb.co/ij03zG/inlogo.png",
	},
];

class Company extends React.Component {
	render() {
		return (
			<div class='col-md-3 col-xs-6 col-sm-6 partner'>
				<img
					class='partner_img'
					alt={this.props.companyName}
					src={this.props.companyLogo}
				></img>
			</div>
		);
	}
}

class CompaniesContainer extends React.Component {
	render() {
		return (
			<>
				<link
					rel='stylesheet'
					href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
					integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
					crossorigin='anonymous'
				/>
				<div class='sect sect--white sect--no-padding'>
					<div class='container'>
						<div class='row row--center'>
							{companyData.map((company) => (
								<Company
									companyName={company["companyName"]}
									companyLogo={company["companyLogo"]}
								/>
							))}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default CompaniesContainer;
