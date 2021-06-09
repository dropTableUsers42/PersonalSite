import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import CodeIcon from '@material-ui/icons/Code';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FeedbackIcon from '@material-ui/icons/Feedback';
import './Home.css';
import { Link } from 'react-router-dom';

function HomeButton(props) {

	const icon = props.children;
	const title = props.title;

	return (
		<>
			<div className="home-button">
				<div className="icon">
					{icon}
				</div>
				<h2>
					{title}
				</h2>
			</div>
		</>
	)
}

function Home() {

	const cardBullets = [
		"UG 4th year",
		"IIT Bombay",
		"CSE"
	];

	const cardList = cardBullets.map((pt)=>{
		return <li key={pt}>{pt}</li>
	});

	const about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum tellus ut elementum molestie. Sed at nibh bibendum, pellentesque ligula vel, bibendum ante. Maecenas ac lacinia nulla. Duis at enim vel dolor elementum cursus. Nulla nibh ipsum, auctor nec ultrices sit amet, maximus sit amet augue. Etiam sit amet pharetra lorem. Curabitur ac magna ac metus posuere convallis. Praesent eu dignissim ipsum, mattis sagittis magna.";

	return (
		<>
			<div className="split">
				<div className="card">
					<div className="card-content">
						<ul>
							{cardList}
						</ul>
					</div>
				</div>
				<p>
					{about}
				</p>
			</div>
			<div className="grid">
				<Link to="/about" className="grid-item">
					<HomeButton title="My Life">
						<FaceIcon />
					</HomeButton>
				</Link>

				<Link to="/resume" className="grid-item">
					<HomeButton className="grid-item" title="Résumé">
						<ArtTrackIcon />
					</HomeButton>
				</Link>

				<Link to="/projects" className="grid-item">
					<HomeButton className="grid-item" title="Projects">
						<CodeIcon/>
					</HomeButton>
				</Link>

				<Link to="/resources" className="grid-item">
					<HomeButton className="grid-item" title="Resources">
						<FolderSpecialIcon />
					</HomeButton>
				</Link>

				<Link to="/contact" className="grid-item">
					<HomeButton className="grid-item" title="Contact">
						<PhoneAndroidIcon />
					</HomeButton>
				</Link>

				<Link to="/feedback" className="grid-item">
					<HomeButton className="grid-item" title="Feedback">
						<FeedbackIcon />
					</HomeButton>
				</Link>
			</div>
		</>
	)
}

export default Home
