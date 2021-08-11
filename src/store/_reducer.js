const initialState = { moviesList: [], displayedMovie: {}, similars: [] };

const state = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LIST_OF_MOVIES':
      console.log('PPPPPPPP ', payload);
      return { ...state, movies: payload.results, total_pages: payload.total_pages };
    case 'MOVIE_DETAILS':
      return { ...state, movie: payload };
    case 'LIST_MOVIE_SIMILERS':
      return { ...state, similars: payload.slice(0, 10) };
    default:
      return state;
  }
};

export default state;
