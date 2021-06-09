import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';

function App(){

	let intersectRef = React.createRef();

	return (
		<Router basename='/'>
			<Navbar intRef={intersectRef} />
			<div className="page">
				<div id="intersect" ref={intersectRef}></div>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App