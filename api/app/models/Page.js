'use strict';

/**
 * Page model
 *
 * @module       :: model
 * @description  :: Represent Page in database
 *
 *
 * Module dependencies
 */

const mongoose   = require('mongoose');
const bcrypt     = require('bcryptjs');
const timestamps = require('mongoose-timestamp');
const Schema     = mongoose.Schema;

/**
 * Page schema
 */

const PageSchema = new Schema({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  thumb: {
    type: String,
    default: '',
  },
  tags: {
    type: String,
    default: '',
  },
  rubrics: {
    type: String,
    default: '',
  },
  slug: {
    type: String,
    default: '',
    unique: true,
  },
  status: {
    type: Number,
    default: ''
  }
});

/**
 * Page plugin
 */

PageSchema.plugin(timestamps);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

PageSchema.methods.authenticate = (Page, password) => {
  return bcrypt.compareSync(password, Page.password);
};

/**
 * Statics
 */

PageSchema.statics = {};

/**
 * Register
 */

mongoose.model('Page', PageSchema);
