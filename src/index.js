import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Hello from './components/hello';
//import User from './components/user';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('app'));
registerServiceWorker();
