import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React, { useState } from 'react';
import './About.css';

function Timeline() {
	return (
		<>
			<div className="time-grid">
				<div className="time-left"></div>
				<div className="time-right"></div>
				
				<div className="time-left"></div>
				<div className="time-right"></div>
				
				<div className="time-left"></div>
				<div className="time-right"></div>

				<div className="time-left"></div>
				<div className="time-right"></div>

				<div className="time-left"></div>
				<div className="time-right"></div>

				<div className="time-left"></div>
				<div className="time-right"></div>
				
			</div>
		</>
	);
}

function About() {

	const offset = -window.screen.width * 0.9 / 4; 

	const [bannerStyle, setBannerStyle] = useState({
		backgroundPosition: `center ${offset}px`,
		'--scroll-height': '0px'
	});


	useScrollPosition(({ prevPos, currPos }) => {
		var wScroll = -currPos.y;

		setBannerStyle({
			backgroundPosition: `center ${wScroll*0.5 + offset}px`,
			'--scroll-height': `${wScroll}px`
		});
	});

	return (
		<>
			<div className="banner" style={bannerStyle}></div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit error voluptatibus ratione minima similique delectus maiores quae nam quidem aliquam dolorem ducimus deleniti, fugit dicta aliquid eum culpa laudantium ipsam cum vitae, voluptates quo aspernatur rem placeat? Quia, quo, cupiditate illum sequi soluta consectetur, aperiam nesciunt sit delectus blanditiis ea.
			</p>
			<Timeline />
		</>
	)
}

export default About
