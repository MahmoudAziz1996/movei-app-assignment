import {
  FETCH_POPULAR_FAILURE,
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_SUCCESS,
} from '../types';

const initialState = {
  popularMovies: [],
  isFetching: false,
  error: false,
};

export default function todosReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        popularMovies: action.payload,
      };
    case FETCH_POPULAR_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
