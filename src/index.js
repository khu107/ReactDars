import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './students'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // render ekranga chiqarish degani
  // React.StrictMode birxil eski kutubxonalar bulsa consolda ogohlantiradi 
  <React.StrictMode> 
  
    <Student/>
    
    
  </React.StrictMode>
);
