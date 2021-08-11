const initialState = { moviesList: [], displayedMovie: {} };

const state = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LIST_OF_MOVIES':
      return { ...state, moviesList: payload };
    case 'MOVIE_DETAILS':
      return { ...state, displayedMovie: payload };
    default:
      return state;
  }
};

export default state;
