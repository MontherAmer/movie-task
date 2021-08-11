import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listMovies, searchMovies, getMovieDetails, getMovieSimilars } from '../../store/_actions';
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(listMovies('upcoming', 2));
    // dispatch(searchMovies('arm', 1));
    dispatch(getMovieDetails(106402));
    dispatch(getMovieSimilars(106402));
  });

  return <div>HOME</div>;
};

export default Home;
