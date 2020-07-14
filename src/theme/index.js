import React from "react"
import { ThemeProvider } from 'emotion-theming'
import { default as defaultTheme } from '@rebass/preset'

import 'styles/index.css';

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
        bold: 700,
    },
    buttons: {
        primary: {
            borderRadius: 0,
            color: '#333',
            bg: 'lightgray',
        },
        secondary: {
            borderRadius: 0,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'black',
            bg: 'white',
            color: 'black'
        }
    }
}

export const ThemeDecorator = storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export { ThemeProvider }
