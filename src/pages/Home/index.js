import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineSearch } from 'react-icons/ai';

import { listMovies, searchMovies, getMovieDetails, getMovieSimilars } from '../../store/_actions';

import Card from '../../components/Card';

import './index.css';
const Home = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(listMovies('upcoming', 2));
    // dispatch(searchMovies('arm', 1));
    dispatch(getMovieDetails(106402));
    dispatch(getMovieSimilars(106402));
  }, []);

  return (
    <div className="container">
      {/* Header Section */}
      <div className="row">
        <div className="col">
          <h2 className="m-0">MOVIES</h2>
        </div>
        <div className="col d-flex justify-content-end">
          <div className="input">
            <AiOutlineSearch className="icon" size={30} />
            <input placeholder="Search..." />
          </div>
        </div>
      </div>
      {/* Tabs Section */}
      <div className="row mt-3">
        <div className="col d-flex justify-content-start">
          <h5 className="m-0 me-4 pointer golden underlined">UPCOMING</h5>
          <h5 className="m-0 me-4 pointer">POPULAR</h5>
          <h5 className="m-0 me-4 pointer">TOP RATED</h5>
        </div>
      </div>

      <div className="row mt-5">
        {list
          ? list.map((item, i) => (
              <div key={i} className="col-3">
                <Card data={item} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
