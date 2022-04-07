import React from 'react';
import {createRoot } from 'react-dom/client';
import './index.css';
import LoginRegister from './LoginRegister'; 
import reportWebVitals from './reportWebVitals';
 

// ReactDOM.render(
//   <React.StrictMode>

    
//      <LoginRegister />
 
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<LoginRegister />);
root.render(<LoginRegister />);







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
