import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';

function App(){
	return (
		<HashRouter basename='/'>
			<Navbar />
			<div className="page">
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
			<Footer />
		</HashRouter>
	);
}

export default App