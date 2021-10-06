import {Dispatch} from 'redux';
import {
  FETCH_POPULAR_FAILURE,
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_SUCCESS,
} from '../types';

import {api} from '../../api/client';
import {API_KEY} from '../../utils/constants';
import {MovieResponse, Movie} from '../../utils/models';

export function fetchPopularMovies() {
  return async (dispatch: Dispatch) => {
    dispatch(getPopularMovies());
    await api
      .get<MovieResponse>(`/movie/popular`, {}, {params: {api_key: API_KEY}})
      .then(response => {
        if (response.ok) {
          let res: Array<Movie> | undefined = response.data?.results;
          return dispatch(getPopularSuccess(res));
        } else {
          return dispatch(getPopularFailure(response.problem));
        }
      });
  };
}

function getPopularMovies() {
  return {
    type: FETCH_POPULAR_MOVIES,
  };
}

function getPopularSuccess(data: Array<Movie> | undefined) {
  return {
    type: FETCH_POPULAR_SUCCESS,
    payload: data,
  };
}

function getPopularFailure(error: string) {
  return {
    type: FETCH_POPULAR_FAILURE,
    payload: error,
  };
}
