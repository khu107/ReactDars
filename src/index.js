import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root'
import Context from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // render ekranga chiqarish degani
  // React.StrictMode birxil eski kutubxonalar bulsa consolda ogohlantiradi 
  <React.StrictMode> 
    <Context>
      <Root/>
    </Context>
    
  </React.StrictMode>
);
