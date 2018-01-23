'use strict';

/**
 * Post model
 *
 * @module       :: model
 * @description  :: Represent Post in database
 *
 *
 * Module dependencies
 */

const mongoose   = require('mongoose');
const bcrypt     = require('bcryptjs');
const timestamps = require('mongoose-timestamp');
const Schema     = mongoose.Schema;

/**
 * Post schema
 */

const PostSchema = new Schema({
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
 * Post plugin
 */

PostSchema.plugin(timestamps);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

PostSchema.methods.authenticate = (Post, password) => {
  return bcrypt.compareSync(password, Post.password);
};

/**
 * Statics
 */

PostSchema.statics = {};

/**
 * Register
 */

mongoose.model('Post', PostSchema);
