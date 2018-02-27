import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Cart from './Cart';
import Project from './App.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<App/>
	, document.getElementById('root'));
registerServiceWorker();
