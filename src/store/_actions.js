import Axios from 'axios';
import { MOVIES_BASE_URL, SEARCH_BASE_URL, API_KEY } from '../config';

export const listMovies = (type, page) => (dispatch) =>
  Axios.get(`${MOVIES_BASE_URL}${type}`, { params: { api_key: API_KEY, page: page || 1 } }).then((res) => {
    return dispatch({ type: 'LIST_OF_MOVIES', payload: res.data });
  });

export const searchMovies = (query, page) => (dispatch) =>
  Axios.get(`${SEARCH_BASE_URL}`, { params: { api_key: API_KEY, query, page: page || 1 } }).then((res) => {
    return dispatch({ type: 'LIST_OF_MOVIES', payload: res.data });
  });

export const getMovieDetails = (movieId) => (dispatch) =>
  Axios.get(`${MOVIES_BASE_URL}${movieId}`, { params: { api_key: API_KEY } }).then((res) => {
    return dispatch({ type: 'MOVIE_DETAILS', payload: res.data });
  });

export const getMovieSimilars = (movieId) => (dispatch) =>
  Axios.get(`${MOVIES_BASE_URL}${movieId}/similar`, { params: { api_key: API_KEY } }).then((res) => {
    return dispatch({ type: 'LIST_MOVIE_SIMILERS', payload: res.data.results });
  });
