import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieReducer from './reducers/movieReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
