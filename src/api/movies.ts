import {api} from './client';
import {API_KEY} from '../utils/constants';

export const fetchUpcomingMovies = async () => {
  return await api.get(`/upcoming?api_key=${API_KEY}`).then(response => {
    return response;
  });
};

export const fetchPopularMovies = async () => {
  return await api.get(`/popular?api_key=${API_KEY}`).then(response => {
    return response;
  });
};

export const fetchTopRatedMovies = async () => {
  return await api.get(`/top_rated?api_key=${API_KEY}`).then(response => {
    return response;
  });
};

export const fetchMovieCast = async (movieId: string) => {
  return await api
    .get(`/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => {
      return response;
    });
};
