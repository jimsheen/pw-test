import React from "react"
import { ThemeProvider } from 'emotion-theming'
import { default as defaultTheme } from '@rebass/preset'

import '../styles/index.css';

export const theme = {
	...defaultTheme,
	breakpoints: ['40em', '64em', '75em'],
	colors: {
		blue: '#2a8ed2',
		blueHover: '#2475ad',
		green: '#77dd77',
		red: '#FF6961',
		lightgray: '#f3f3f3',
	},
	fontWeights: {
		bold: 500,
	},
	buttons: {
    primary: {
			borderRadius: 0,
      color: '#333',
      bg: 'lightgray',
    }
  }
}

export const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export { ThemeProvider } 