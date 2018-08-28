import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
