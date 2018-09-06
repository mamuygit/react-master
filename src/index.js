import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, } from 'react-router-dom';
import Site from './containers/Site';
import '!file-loader?name=[name].[ext]!./images/craze-ring.svg';
import './style.scss';

ReactDOM.render(
    <BrowserRouter>
        <Site/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
