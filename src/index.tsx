import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
              box-sizing: border-box;
  }

  body {
    background-color: #D1D1D1;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  a{
    color: #0052CC;
    text-decoration: none;
  }
  
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
