import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

	const mobile = window.matchMedia('(max-width: 700px)').matches;

	const [scrollY, setScrollY] = useState(window.pageYOffset);

	const [first, setFirst] = useState(true);

	function calcNavbarScale() {
		const Yoffset = first ? window.pageYOffset : scrollY;

		const percentScrolled = Math.min(Yoffset/(doubleHeight-singleHeight), 1);

		const height = doubleHeight + percentScrolled * (singleHeight - doubleHeight);

		return height/doubleHeight;
	}

	function calcLogoTransform() {

		const Yoffset = first ? window.pageYOffset : scrollY;

		const percentScrolled = Math.min(Yoffset/(doubleHeight-singleHeight), 1);

		const [X, Y] = [percentScrolled * finalX, percentScrolled * finalY];

		return [X, Y];
	};

	function calcOpacity() {
		const Yoffset = first ? window.pageYOffset : scrollY;

		const percentScrolled = Math.min(Yoffset/(doubleHeight-singleHeight), 1);

		return (1-percentScrolled);
	}

	const doubleHeight = 98;
	const fontSize = 40;
	const singleHeight = doubleHeight - fontSize;
	const [finalX, finalY] = [1.1,-fontSize];

	const [logoSecondStyle, setLogoSecondStyle] = useState(
		{transform: `translate(${calcLogoTransform()[0]}ch, ${calcLogoTransform()[1]}px)`,
		color: `rgba(var(--clr-fg-800-r), var(--clr-fg-800-g), var(--clr-fg-800-b), ${calcOpacity()})`}
	);

	const [logoFirstStyle, setLogoFirstStyle] = useState(
		{color: `rgba(var(--clr-fg-800-r), var(--clr-fg-800-g), var(--clr-fg-800-b), ${calcOpacity()})`}
	);

	const [navbarStyle, setNavbarStyle] = useState(
		{transform: `scale(1, ${calcNavbarScale()})`}
	)

	const [invNavbarStyle, setInvNavbarStyle] = useState(
		{transform: `scale(1, ${1/calcNavbarScale()})`}
	)


	const scrollHandler = e => {

		setScrollY(window.pageYOffset);

		setLogoSecondStyle(
			{transform: `translate(${calcLogoTransform()[0]}ch, ${calcLogoTransform()[1]}px)`,
			color: `rgba(var(--clr-fg-800-r), var(--clr-fg-800-g), var(--clr-fg-800-b), ${calcOpacity()})`}
		);

		setLogoFirstStyle(
			{color: `rgba(var(--clr-fg-800-r), var(--clr-fg-800-g), var(--clr-fg-800-b), ${calcOpacity()})`}
		);

		setNavbarStyle(
			{transform: `scale(1, ${calcNavbarScale()})`}
		)

		setInvNavbarStyle(
			{transform: `scale(1, ${1/calcNavbarScale()})`}
		)

		setFirst(false);
	}

	useEffect(() => {
		if(mobile)
			window.addEventListener("scroll", scrollHandler, {passive: true});
		return () => {
			if(mobile)
				window.removeEventListener("scroll", scrollHandler);
		}
	})

	return (
		<>
			<div className="navbar" style={navbarStyle}>
				<div className="container" style={invNavbarStyle}>
					<div className="navbar-container">
						<Link to="/" className="navbar-logo">
							<div className="logo-split">
								<p id="logo-first" style={logoFirstStyle}>
									witaban
								</p>
								<p id="logo-second" style={logoSecondStyle}>
									oswami
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
