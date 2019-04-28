import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import * as serviceWorker from './scripts/serviceWorker';
import thunk from 'redux-thunk';

import './scripts/other/fontAwesome';

// import './scripts/other/polyfills';

import App from './scripts/containers/App/App';
import './styles/styles.scss';

import reducers from './scripts/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));



const app = (
    <Provider store={store}>
      <App />
    </Provider>
);

// dle ie
document.createElement('main');

ReactDOM.render(app, document.getElementById('app'));
