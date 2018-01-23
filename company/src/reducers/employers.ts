/**
 * Dependencies
 */

import {
  REQUEST_EMPLOYERS,
  RECEIVE_EMPLOYERS,
} from './../actions/types';

const initialState = {
  loading: false,
  data: [],
};

/**
 * Expo
 */

const employers = (state = initialState, action: IReduxAction) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_EMPLOYERS: return { ...state, ...payload };
    case RECEIVE_EMPLOYERS: return { ...state, loading: false };
    default: return state;
  }
};

export default employers;
