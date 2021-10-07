import {
  FETCH_GENRES,
  FETCH_GENRES_FAILURE,
  FETCH_GENRES_SUCCESS,
} from '../types';

const initialState = {
  genres: [],
  isFetching: false,
  error: false,
};

export default function castReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        genres: action.payload,
      };
    case FETCH_GENRES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
