/**
 * Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';

/**
 * Expo
 */

export default combineReducers({
  courses,
  routing: routerReducer,
});
