import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {

	const [isScrolled, setIsScrolled] = useState(false);

	const scrollCallback = (entries) => {
		const [entry] = (entries);
		setIsScrolled(!entry.isIntersecting);
	};

	useEffect(() => {

		const headerHeight = getComputedStyle(document.body).getPropertyValue('--header-height').trim();

		const options = {
			rootMargin: `-${headerHeight} 0px 0px 0px`
		};

		const observer = new IntersectionObserver(scrollCallback, options);

		if(props.intRef.current)
			observer.observe(props.intRef.current);

		return () => {
			if(props.intRef.current)
				observer.unobserve(props.intRef.current);
		}
	}, [props.intRef]);

	return (
		<>
			<div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
				<div className="container">
					<div className="navbar-container">
						<Link to="/" className="navbar-logo">
							<div className="logo-split">
								<p id="logo-first">
									witaban
								</p>
								<p id="logo-second">
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
