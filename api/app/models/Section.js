'use strict';

/**
 * Section model
 *
 * @module       :: model
 * @description  :: Represent Section in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

/**
 * Section schema
 */

const SectionSchema = new Schema({
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
  },
  content: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  status: {
    type: Number,
    default: 0
  },
  slug: {
    type: String,
    default: '',
    unique: true,
    required: true,
  },
});

/**
 * Section plugin
 */

// SectionSchema.plugin(SectionPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Statics
 */

SectionSchema.statics = {};

/**
 * Register
 */

mongoose.model('Section', SectionSchema);
