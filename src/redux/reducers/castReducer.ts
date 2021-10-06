import {
  FETCH_MOVEI_CAST,
  FETCH_MOVEI_CAST_FAILURE,
  FETCH_MOVEI_CAST_SUCCESS,
} from '../types';

const initialState = {
  movieCasts: [],
  isFetching: false,
  error: false,
};

export default function castReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_MOVEI_CAST:
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    case FETCH_MOVEI_CAST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movieCasts: action.payload,
      };
    case FETCH_MOVEI_CAST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
