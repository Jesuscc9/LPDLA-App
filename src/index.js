import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import './Global.css';
import App from './Components/App'

const container = document.getElementById('app');

ReactDOM.render(<App />, container);