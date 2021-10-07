import {Dispatch} from 'redux';
import {
  FETCH_GENRES,
  FETCH_GENRES_FAILURE,
  FETCH_GENRES_SUCCESS,
} from '../types';

import {api} from '../../api/client';
import {API_KEY} from '../../utils/constants';
import {Genre, GenreResponse} from '../../utils/models';

export function fetchGenres() {
  return async (dispatch: Dispatch) => {
    dispatch(getAllGenres());
    await api
      .get<GenreResponse>(`genre/movie/list`, {}, {params: {api_key: API_KEY}})
      .then(response => {
        if (response.ok) {
          let res: Array<Genre> | undefined = response.data?.genres;
          return dispatch(getGenresSuccess(res));
        } else {
          return dispatch(getGenresFailure(response.problem));
        }
      });
  };
}

function getAllGenres() {
  return {
    type: FETCH_GENRES,
  };
}

function getGenresSuccess(data: Array<Genre> | undefined) {
  return {
    type: FETCH_GENRES_SUCCESS,
    payload: data,
  };
}

function getGenresFailure(error: string) {
  return {
    type: FETCH_GENRES_FAILURE,
    payload: error,
  };
}
