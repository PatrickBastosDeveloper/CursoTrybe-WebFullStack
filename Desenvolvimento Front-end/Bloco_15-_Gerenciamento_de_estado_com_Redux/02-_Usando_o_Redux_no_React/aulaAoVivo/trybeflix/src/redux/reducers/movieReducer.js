// todo: construir a lógica do nosso reducer
import categories from '../../data';
import { SELECT_MOVIE } from '../actions';

const INITIAL_STATE = {
  selectedMovie: categories[0].movies[0],
  selectedCategory: categories[0],
  categories,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedMovie: action.payload.selectedMovie,
      selectedCategory: action.payload.selectedCategory,
    };
  default:
    return state;
  }
};

export default movieReducer;
