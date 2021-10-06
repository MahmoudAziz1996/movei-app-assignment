import {Dispatch} from 'redux';
import {
  FETCH_UPCOMING_FAILURE,
  FETCH_UPCOMING_MOVIES,
  FETCH_UPCOMING_SUCCESS,
} from '../types';

import {api} from '../../api/client';
import {API_KEY} from '../../utils/constants';
import {MovieResponse, Movie} from '../../utils/models';

export function fetchUpcomingMovies() {
  return async (dispatch: Dispatch) => {
    dispatch(getUpcomingMovies());
    const result = await api
      .get<MovieResponse>(`/movie/upcoming`, {}, {params: {api_key: API_KEY}})
      .then(response => {
        if (response.ok) {
          let res: Array<Movie> | undefined = response.data?.results;
          return dispatch(getUpcomingSuccess(res));
        } else {
          return dispatch(getUpcomingFailure(response.problem));
        }
      });
  };
}

function getUpcomingMovies() {
  return {
    type: FETCH_UPCOMING_MOVIES,
  };
}

function getUpcomingSuccess(data: Array<Movie> | undefined) {
  return {
    type: FETCH_UPCOMING_SUCCESS,
    payload: data,
  };
}

function getUpcomingFailure(error: string) {
  return {
    type: FETCH_UPCOMING_FAILURE,
    payload: error,
  };
}
