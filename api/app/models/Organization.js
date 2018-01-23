'use strict';

/**
 * Organization model
 *
 * @module       :: model
 * @description  :: Represent Organization in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      bcrypt   = require('bcryptjs'),
      Schema   = mongoose.Schema;

/**
 * Organization schema
 */

const OrganizationSchema = new Schema({
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
  carBrands: [{ type: Schema.Types.ObjectId, ref: 'carBrand' }],
  services:  [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  payments:  [{ type: Schema.Types.ObjectId, ref: 'Payment' }],
  phone: {
    type: Array,
    default: [],
  },
  email: {
    type: Array,
    default: [],
  },
  slug: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: Number,
    default: 0
  }
});

/**
 * Organization plugin
 */

// OrganizationSchema.plugin(OrganizationPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

OrganizationSchema.methods.authenticate = (organization, password) => {
  return bcrypt.compareSync(password, organization.password);
};

/**
 * Statics
 */

OrganizationSchema.statics = {};

/**
 * Register
 */

mongoose.model('Organization', OrganizationSchema);
