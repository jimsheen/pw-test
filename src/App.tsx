import React from 'react';
import {
	Switch,
	Route,
} from 'react-router-dom';

import { useAuth } from 'context/AuthContext';
import DashboardPage from './components/pages/DashboardPage';
import LoginPage from 'components/pages/LoginPage';

function AuthenticatedApp() {
	return (
		<Switch>
			<Route path="/" component={DashboardPage} exact />
		</Switch>
	)
}

function UnauthenticatedApp() {
	return (
		<Switch>
			<Route path="/" component={LoginPage} exact />
		</Switch>
	)
}

function App() {
	const { user } = useAuth();
	return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App;
