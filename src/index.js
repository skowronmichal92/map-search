import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './scripts/serviceWorker';

// import './scripts/other/polyfills';

import App from './scripts/containers/App/App';
import './styles/styles.scss';

const app = (
  <App />
);

// dle ie
document.createElement('main');

ReactDOM.render(app, document.getElementById('app'));
