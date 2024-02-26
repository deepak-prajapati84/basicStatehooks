import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Image from './Image';
import Gallery from './Gallery';
import FunctionalIncrement from './state/FunctionalIncrement';
import ClassComponentStatae from './state/ClassComponentState';
import ClassFunctionalState from './state2/ClassFunctionalState';
import FunctionalComponent from './state2/FunctionalComponent';
import UseEffectFunctional from './state2/UseEffectFunctional';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseEffectFunctional />
    {/* <FunctionalComponent /> */}
    {/* <ClassFunctionalState /> */}

    {/* <FunctionalIncrement /> */}
    {/* <ClassComponentStatae /> */}
    {/* <App /> */}
    {/* <Image />
    <Image />
    <Image />
    <Gallery />
    <Gallery /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
