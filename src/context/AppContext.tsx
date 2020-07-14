import React from 'react';

import {
	BrowserRouter
} from 'react-router-dom';

import { AuthProvider } from 'context/AuthContext';
import { ThemeProvider, theme } from 'theme';

const AppProviders: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<BrowserRouter>
					{children}
				</BrowserRouter>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default AppProviders
