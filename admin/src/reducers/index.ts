/**
 * Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import pages from './pagesReducer';
import sections from './sectionsReducer';
import courses from './coursesReducer';
import users from './usersReducer';
import organizations from './organizationsReducer';
import posts from './postsReducer';
import settings from './settingsReducer';

/**
 * Expo
 */

export default combineReducers({
  pages,
  users,
  posts,
  courses,
  sections,
  settings,
  organizations,
  routing: routerReducer,
});
