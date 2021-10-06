import {
  FETCH_TOP_RATED_FAILURE,
  FETCH_TOP_RATED_MOVIES,
  FETCH_TOP_RATED_SUCCESS,
} from '../types';

const initialState = {
  topRatedMovies: [],
  isFetching: false,
  error: false,
};

export default function topRatedReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_TOP_RATED_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TOP_RATED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        topRatedMovies: action.payload,
      };
    case FETCH_TOP_RATED_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
