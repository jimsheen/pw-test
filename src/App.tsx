import React from 'react';

import {
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom';

import { ThemeProvider, theme } from './theme';
import { LayoutContainer } from './components/layout/';
import DashboardPage from './components/pages/DashboardPage';

function App() {

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<LayoutContainer>
					<Switch>
						<Route path="/" component={DashboardPage} exact />
					</Switch>
				</LayoutContainer>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
