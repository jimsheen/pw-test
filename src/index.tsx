import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter
} from 'react-router-dom';

import App from './App';
import { AuthProvider } from 'context/AuthContext';
import { ThemeProvider, theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
