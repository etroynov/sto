/*!
 * Vendor
 */

import { createReducer } from 'redux-act';

/*!
 * Init state
 */

const initialState: IReducerState = {
  loading: false,
  data: [],
};

/*!
 * Actions
 */

import {
  requestCourses,
  receiveCourses,

  receiveCreateCourse,
  requestCreateCourse,

  receiveUpdateCourse,
  requestUpdateCourse,
} from '../actions/coursesActions';

/*!
 * Expo
 */

const coursesReducer = createReducer(
  {
    // List course
    [requestCourses]: (state: IReducerState) => ({ ...state, loading: true }),
    [receiveCourses]: (state: IReducerState, payload) => ({
      ...state,
      data: payload,
      loading: false,
    }),

    // Create course
    [requestCreateCourse]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveCreateCourse]: (state: IReducerState, payload) => ({
      data: [...state.data, payload],
      loading: false,
    }),

    // Update course
    [requestUpdateCourse]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveUpdateCourse]: (state: IReducerState, payload) => {
      const data = state.data.map((item) => {
        if (item._id === payload._id) {
          return { ...item, ...payload };
        }

        return item;
      });

      return {
        data,
        loading: false,
      };
    },
  },
  initialState,
);

export default coursesReducer as any;
