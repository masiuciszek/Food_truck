import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LogProvider from './context/logs/Logs.state';


ReactDOM.render(<LogProvider><App /></LogProvider>, document.getElementById('root'));
