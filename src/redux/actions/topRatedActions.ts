import {Dispatch} from 'redux';
import {
  FETCH_TOP_RATED_FAILURE,
  FETCH_TOP_RATED_MOVIES,
  FETCH_TOP_RATED_SUCCESS,
} from '../types';

import {api} from '../../api/client';
import {API_KEY} from '../../utils/constants';
import {MovieResponse, Movie} from '../../utils/models';

export function fetchTopRatedMovies() {
  return async (dispatch: Dispatch) => {
    dispatch(getPopularMovies());
    await api
      .get<MovieResponse>(`/movie/top_rated`, {}, {params: {api_key: API_KEY}})
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
    type: FETCH_TOP_RATED_MOVIES,
  };
}

function getPopularSuccess(data: Array<Movie> | undefined) {
  return {
    type: FETCH_TOP_RATED_SUCCESS,
    payload: data,
  };
}

function getPopularFailure(error: string) {
  return {
    type: FETCH_TOP_RATED_FAILURE,
    payload: error,
  };
}
