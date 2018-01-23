/**
 * Dependencies
 */

const mongoose = require('mongoose');
const fs       = require('fs');
const path     = require('path');
const { send } = require('micro');
const compose  = require('micro-compose');
const cors     = require('micro-cors')();

const { router, get, post } = require('microrouter');

/**
 * DataBase
 */

mongoose.connect('mongodb://localhost/ucavtor');
mongoose.Promise = global.Promise;

/**
 * Models require
 */

fs.readdirSync(path.join(__dirname, '/app/models')).forEach((file) => {
  if (file.includes('.js')) {
    require(path.join(__dirname, '/app/models/', file));
  }
});

/**
 * Routes
 */

const pagesController         = require('./app/controllers/pagesController');
const coursesController       = require('./app/controllers/coursesController');
const sectionsController      = require('./app/controllers/sectionsController');
const usersController         = require('./app/controllers/usersController');
const organizationsController = require('./app/controllers/organizationsController');
const postsController         = require('./app/controllers/postsController');
const settingsController      = require('./app/controllers/settingsController');

const notfound = (req, res) =>
  send(res, 404, 'You shall not passs :)')

/**
 * Expo
 */

module.exports = compose(
  cors
)(router(
  /** PAGES **/
  get('/pages',         pagesController.index),
  post('/pages/create', pagesController.create),
  post('/pages/update', pagesController.update),
  post('/pages/delete', pagesController.delete),

  /** COURSES **/
  get('/courses',         coursesController.index),
  post('/courses/create', coursesController.create),
  post('/courses/update', coursesController.update),
  post('/courses/delete', coursesController.delete),
  
  /** SECTIONS **/
  get('/sections',         sectionsController.index),
  post('/sections/create', sectionsController.create),
  post('/sections/update', sectionsController.update),
  post('/sections/delete', sectionsController.delete),

  /** USERS **/
  get('/users',         usersController.index),
  post('/users/create', usersController.create),
  post('/users/update', usersController.update),
  post('/users/delete', usersController.delete),
  post('/users/login',  usersController.login),
  
  /** ORGANIZATIONS **/
  get('/organizations',           organizationsController.index),
  get('/organizations/employers', organizationsController.employers),
  post('/organizations/create',   organizationsController.create),
  post('/organizations/login',    organizationsController.login),

  /** POSTS **/
  get('/posts',         postsController.index),
  post('/posts/create', postsController.create),
  post('/posts/update', postsController.update),
  post('/posts/delete', postsController.delete),

  /** COURSES **/
  get('/settings',         settingsController.index),
  post('/settings/create', settingsController.create),
  post('/settings/update', settingsController.update),
  post('/settings/delete', settingsController.delete),
  
  /** 404 **/
  get('/*', notfound)
));
