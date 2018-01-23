/*!
 * Vendor
 */

import axios from 'axios';
import { createAction } from 'redux-act';

/*!
 * Utils
 */

import { error } from './../utils/modals';


/*!
 * Expo
 */

/**
 * LIST USER
 */


export const requestUsers: any = createAction('REQUEST_Users');
export const receiveUsers: any = createAction('RECEIVE_Users');


export const fetchUsers = () => (dispatch) => {
  dispatch(requestUsers());

  return axios.get(
    'http://api.ucavtor.ru/users',
  ).then(
    ({ data }) => dispatch(receiveUsers(data)),
    err => error(),
  );
};

/**
 * CREATE USER
 */

export const requestCreateUser: any = createAction('REQUEST_CREATE_USER');
export const receiveCreateUser: any = createAction('RECEIVE_CREATE_USER');

export const createUser = data => (dispatch) => {
  dispatch(requestCreateUser());

  return axios.post(
    'http://api.ucavtor.ru/users/create',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreateUser(data)),
    err => error(),
  );
};

/**
 * UPDATE USER
 */

export const requestUpdateUser: any = createAction('REQUEST_UPDATE_USER');
export const receiveUpdateUser: any = createAction('RECEIVE_UPDATE_USER');

export const updateUser = data => (dispatch) => {
  dispatch(requestUpdateUser());

  return axios.post(
    'http://api.ucavtor.ru/users/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdateUser(data)),
    err => error(),
  );
};

/**
 * DELETE USER
 */

export const requestDeleteUser: any = createAction('REQUEST_DELETE_USER');
export const receiveDeleteUser: any = createAction('RECEIVE_DELETE_USER');

export const deleteUser = data => (dispatch) => {
  dispatch(requestDeleteUser());

  return axios.post(
    'http://api.ucavtor.ru/users/delete',
    data,
  ).then(
    ({ data }) => dispatch(receiveDeleteUser(data)),
    err => error(),
  );
};

