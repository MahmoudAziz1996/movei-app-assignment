import {
  FETCH_UPCOMING_MOVIES,
  FETCH_UPCOMING_FAILURE,
  FETCH_UPCOMING_SUCCESS,
} from '../types';

const initialState = {
  upcomingMovies: [],
  isFetching: false,
  error: false,
};

export default function todosReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_UPCOMING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        upcomingMovies: action.payload,
      };
    case FETCH_UPCOMING_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
