/**
 * Dependencies
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

/**
 * Components
 */

import App from './App';

/**
 * Configuration
 */

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(reduxThunk),
  ),
);

/**
 * Expo
 */

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
