import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Save from './pages/Save.jsx';
import reportWebVitals from './reportWebVitals';
import App from './App.jsx';
import Loading from './pages/Loading.jsx';
import Bpp from './pages/Bpp.jsx';
import Cpp from './pages/Cpp.jsx';
import Third  from './pages/Third/Third.jsx';
import Run from '../src/pages/Run/Run.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Third/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
