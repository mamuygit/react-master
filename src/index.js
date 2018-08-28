import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import './style.scss';

import Site from './containers/Site';


ReactDOM.render(
    <BrowserRouter>
        <Site />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
