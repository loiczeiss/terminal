import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Terminal from './Terminal';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className="bg-black text-white h-screen "> <Terminal /></div>
   
  </React.StrictMode>
);

