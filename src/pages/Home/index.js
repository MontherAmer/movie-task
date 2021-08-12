import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineSearch } from 'react-icons/ai';

import { listMovies, searchMovies, getMovieDetails, getMovieSimilars } from '../../store/_actions';

import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

import './index.css';
const Home = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ page: 1, tab: 'upcoming', query: '' });

  const { movies, total_pages } = useSelector((state) => state);

  useEffect(() => {
    dispatch(listMovies({ type: 'upcoming', page: 1 }));
  }, []);

  const handleCategory = (e) => {
    setState({ ...state, tab: e, page: 1, query: '' });
    dispatch(listMovies({ type: e, page: 1 }));
  };

  const handleSearch = (e) => {
    setState({ ...state, query: e.target.value });
    dispatch(searchMovies({ query: e.target.value, page: state.page }));
  };

  const handlePagination = (e) => {
    console.log('ppppp ', e);
    console.log('sakfdlsadf');
    setState({ ...state, page: e });
    state.query.length ? dispatch(searchMovies({ query: state.query, page: e })) : dispatch(listMovies({ type: state.tab, page: e }));
  };

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
            <input placeholder="Search..." value={state.query} onChange={handleSearch} />
          </div>
        </div>
      </div>
      {/* Tabs Section */}
      <div className="row mt-3">
        <div className="col d-flex justify-content-start">
          <h5 className={`m-0 me-4 pointer ${state.tab === 'upcoming' ? 'golden underlined' : ''}`} onClick={() => handleCategory('upcoming')}>
            UPCOMING
          </h5>
          <h5 className={`m-0 me-4 pointer ${state.tab === 'popular' ? 'golden underlined' : ''}`} onClick={() => handleCategory('popular')}>
            POPULAR
          </h5>
          <h5 className={`m-0 me-4 pointer ${state.tab === 'top_rated' ? 'golden underlined' : ''}`} onClick={() => handleCategory('top_rated')}>
            TOP RATED
          </h5>
        </div>
      </div>

      <div className="row mt-5">
        {movies
          ? movies.map((item, i) => (
              <div key={i} className="col-xs-12 col-md-6 col-lg-3">
                <Card data={item} />
              </div>
            ))
          : null}
      </div>

      <Pagination page={state.page} totalPages={total_pages} onChange={handlePagination} />
    </div>
  );
};

export default Home;
