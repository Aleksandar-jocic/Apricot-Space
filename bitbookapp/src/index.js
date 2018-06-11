import React from 'react';
import ReactDOM from 'react-dom';
//throws an error without index.css
// import './app/Styles/index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from "react-router-dom";


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    
    document.getElementById('root'));
registerServiceWorker();
