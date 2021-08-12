import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getMovieDetails, getMovieSimilars } from '../../store/_actions';

import { IMAGES_BASE_URL } from '../../config';

import Card from '../../components/Card';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const Movie = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { movie, similars } = useSelector((state) => state);

  useEffect(() => {
    console.log('    console.log(history.location.pathname);', history.location.pathname);
    let id = history.location.pathname.split('/')[2];
    dispatch(getMovieDetails(id));
  }, [history.location.pathname]);

  useEffect(() => {
    if (movie?.id) dispatch(getMovieSimilars(movie?.id));
  }, [movie]);

  const goBack = () => history.push('/');

  return movie ? (
    <div className="container  position-relative">
      <div className="row">
        <div className="col d-flex align-items-center">
          <AiOutlineArrowLeft className="home-icon" title="home" onClick={goBack} />
          <h2 className="m-0">{movie.original_title}</h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-7 d-flex flex-column">
          <img src={`${IMAGES_BASE_URL}${movie.backdrop_path}`} alt="image" />
          <h4>{movie.original_title}</h4>
          <div className="d-flex">
            <p className="me-2">Category: </p>
            <p className="golden"> {movie.genres.map((item, i) => (i !== movie.genres.length ? `${item.name}, ` : item.name))} </p>
          </div>

          <div className="d-flex">
            <p className="me-2">Languages: </p>
            <p> {movie.spoken_languages.map((item, i) => (i !== movie.spoken_languages.length ? `${item.name}, ` : item.name))} </p>
          </div>

          <div className="d-flex">
            <p className="me-2">Running Time: </p>
            <p> {movie.runtime} min </p>
          </div>
        </div>

        <div className="col-5">
          <div className="row">
            {similars
              ? similars.map((item, i) => (
                  <div key={i} className="col-xs-12 col-lg-6">
                    <Card data={item} />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>no movie</div>
  );
};

export default Movie;
