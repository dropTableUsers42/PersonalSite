import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';

function App(){
	return (
		<Router>
			<Navbar />
			<div className="page">
				<Switch>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App