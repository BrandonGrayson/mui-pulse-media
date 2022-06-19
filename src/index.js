import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material/styles"
import { createTheme } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 999,
      lg: 1000,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: "#2F303A",
      secondary: '#FFFFFF'
    },
    pulse: {
      background: '#FFFCFA',
      subtitleText: "#CFD6E0",
      actionButton: '#FF4F67',
      secondaryContrast: '#faee1c',
      circularText: '#E9E6FF',
      headerText: '#24307D',
      buttontext: '#FFFFFF',
      navBar: '#6E7EE0'
    }
  },
  typography: {
    fontFamily: 'Playfair Display'
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
