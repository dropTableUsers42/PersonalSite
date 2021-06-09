import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.css';

function Footer() {

	const content = "Made with React and ♥️";

	return (
		<>
			<div className="footer">
				<div className="container">
					<div className="footer-container">
						<p>
							{content}
						</p>
						<div className="footer-icons">
							<GithubIcon fontSize="inherit" />
							<LinkedInIcon fontSize="inherit"/>
							<FacebookIcon fontSize="inherit"/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
