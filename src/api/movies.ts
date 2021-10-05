import {api} from './client';
import {API_KEY, BASE_URL} from '../utils/constants';
import axios from 'axios';
import {MovieResponse, Creditsesponse} from '../utils/models';

export const fakeApi = async () => {
  return await axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchUpcomingMovies = async () => {
  return await api
    .get<MovieResponse>(`/movie/upcoming`, {}, {params: {api_key: API_KEY}})
    .then(response => {
      return response;
    });
};

export const fetchPopularMovies = async () => {
  return await api
    .get<MovieResponse>(`/movie/popular`, {}, {params: {api_key: API_KEY}})
    .then(response => {
      return response;
    });
};

export const fetchTopRatedMovies = async () => {
  return await api
    .get<MovieResponse>(`/movie/top_rated`, {}, {params: {api_key: API_KEY}})
    .then(response => {
      return response;
    });
};

export const fetchMovieCast = async (movieId: number) => {
  return await api
    .get<Creditsesponse>(
      `/movie/${movieId}/credits`,
      {},
      {params: {api_key: API_KEY}},
    )
    .then(response => {
      return response;
    });
};

export const fetchGenres = async (movieId: string) => {
  return await api
    .get(`/${movieId}/genre/movie/list`, {}, {params: {api_key: API_KEY}})
    .then(response => {
      return response;
    });
};
