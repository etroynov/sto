import {
  REQUEST_EMPLOYERS,
  RECEIVE_EMPLOYERS,
} from '../actions/types';

const initialState = {
  loading: false,
  data: []
};

const organization = (state = initialState, action: IReduxAction = { type: '', payload: {} }) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_EMPLOYERS: return { ...state, ...payload };
    case RECEIVE_EMPLOYERS: return { ...state, ...payload };

    default: return state;
  }
};

export default organization;
