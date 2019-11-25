import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/homePage';

const routes = ({ props } = props) => {
	return (
		<BrowserRouter>
			<Header></Header>
			<Switch>
				<Route
					exact
					path='/'
					component={() => <HomePage props={props}></HomePage>}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default routes;
