/**
 * Dependencies
 */

import {
  REQUEST_COURSES,
  RECEIVE_COURSES,
} from './../actions/types';

const initialState = {
  loading: false,
  data: [],
};

/**
 * Expo
 */

const courses = (state = initialState, action: IReduxAction) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_COURSES: return { ...state, ...payload };
    case RECEIVE_COURSES: return { ...state, loading: false };
    default: return state;
  }
};

export default courses;
