/**
 * Dependencies
 */

import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToket';

import { error } from './../utils/modals';

/**
 * Constants
 */

import { SET_CURRENT_USER } from './types';

/**
 * Expos
 */

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const login = data => dispatch => axios.post(
  'http://localhost:8081/organizations/login',
  data,
).then(
  ({ data }) => {
    const { token } = data;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    location.pathname = '/';
  },
  err => error(),
);
