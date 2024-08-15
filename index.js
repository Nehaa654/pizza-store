/* eslint-disable no-unused-vars */
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have an index.css file for global styles
import App from './App';
import reportWebVitals from './reportWebVitals';


const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    
    <App/>
    
  </React.StrictMode>,
  
);

reportWebVitals();
