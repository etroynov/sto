/**
 * Dependencies
 */

import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

/**
 * Styles
 */

import './assets/css/antd.min.css';
import './assets/styl/index.styl';

/**
 * Root Component
 */

import App from './App';

/**
 * Store settings
 */

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
    ),
  ),
);

/**
 * Expo
 */

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
