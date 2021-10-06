import {Dispatch} from 'redux';
import {
  FETCH_MOVEI_CAST,
  FETCH_MOVEI_CAST_FAILURE,
  FETCH_MOVEI_CAST_SUCCESS,
} from '../types';

import {api} from '../../api/client';
import {API_KEY} from '../../utils/constants';
import {Creditsesponse, Cast} from '../../utils/models';

export function fetchMovieCast(movieId: number) {
  return async (dispatch: Dispatch) => {
    dispatch(getMovieCast());
    await api
      .get<Creditsesponse>(
        `/movie/${movieId}/credits`,
        {},
        {params: {api_key: API_KEY}},
      )
      .then(response => {
        if (response.ok) {
          let res: Array<Cast> | undefined = response.data?.cast;
          return dispatch(getMovieCastSuccess(res));
        } else {
          return dispatch(getMovieCastFailer(response.problem));
        }
      });
  };
}

function getMovieCast() {
  return {
    type: FETCH_MOVEI_CAST,
  };
}

function getMovieCastSuccess(data: Array<Cast> | undefined) {
  return {
    type: FETCH_MOVEI_CAST_SUCCESS,
    payload: data,
  };
}

function getMovieCastFailer(error: string) {
  return {
    type: FETCH_MOVEI_CAST_FAILURE,
    payload: error,
  };
}
