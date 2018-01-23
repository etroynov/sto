/**
 * Dependencies
 */

import {
  REQUEST_NOTIFICATION,
  RECEIVE_NOTIFICATION,
} from './../actions/types';

const initialState = {
  loading: false,
  data: [],
};

/**
 * Expo
 */

const notifications = (state = initialState, action: IReduxAction) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_NOTIFICATION: return { ...state, ...payload };
    case RECEIVE_NOTIFICATION: return { ...state, ...payload };
    default: return state;
  }
};

export default notifications;
