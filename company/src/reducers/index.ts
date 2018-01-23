/**
 * Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import notifications from './notifications';
import employers from './employers';
import courses from './courses';
import auth from './auth';

/**
 * Expo
 */

export default combineReducers({
  routing: routerReducer,
  notifications,
  employers,
  courses,
  auth,
});
