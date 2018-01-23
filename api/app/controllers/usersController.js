/**
 * User controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle user( login, logout and etc )
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose');

const { send, json } = require('micro');
const { hashSync, compareSync } = require('bcryptjs');
const { generate } = require('generate-password');
const { createTransport } = require('nodemailer');
const { sign } = require('jsonwebtoken');

const Organization = mongoose.model('Organization');
const User = mongoose.model('User');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  const [organizations, users] = await Promise.all([
    Organization.find(),
    User.find(),
  ]);

  return send(res, 200, { organizations, users });
};

exports.create = async (req, res) => {
  try {
    const {
      name,
      inn,
      kpp,
      bankAccount,
      bic,
      address,
      directorFio,
      directorPosition,
      directorPhone,
      fio,
      position,
      telephone,
      emai,
    } = await json(req);

    const organization = await Organization.create({
      name,
      inn,
      kpp,
      bankAccount,
      bic,
      address,
      directorFio,
      directorPosition,
      directorPhone
    });
    
    return send(res, 200, organization);
  } catch(e) {

    console.info('test', e);
    return send(res, 500, e);
  }
};

exports.update = async (req, res) => {
  const id = req.body.id || '';

  await User.update({
    _id: id,
  }, {
    name: req.body.name,
    login: req.body.login,
    group: req.body.group,
    lastname: req.body.lastname,
    telephone: req.body.telephone,
    Organization: req.body.Organization,
  });

  return res.redirect('/dashboard/users');
};

exports.delete = async (req, res) => {
  try {
    const { id } = await json(req);

    await Organization.findByIdAndRemove(id);
    
    return send(res, 200);
  } catch(e) {
    return send(res, 500, e);
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = await json(req);
    const user = await Organization.findOne({ email });

    if (compareSync(password, user.password)) {
      const token = sign(user.toObject(), '123');
      return send(res, 200, { token })
    }

    return send(res, 403);
  } catch(e) {
    console.info(e);
    return send(res, 500, e)
  }
}
