import {store} from '../redux/store';
import {Genre} from './models';

const moviesGenres: Array<Genre> = store.getState().genresReducer.genres;

export const filterGenresById = (gernresIds: Array<number>) => {
  const results = moviesGenres.filter(o1 => {
    return gernresIds.some(o2 => {
      return o1.id === o2;
    });
  });
  return results;
};
