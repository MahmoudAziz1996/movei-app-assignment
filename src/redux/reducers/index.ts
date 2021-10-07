import {combineReducers} from 'redux';
import movieReducers from './upcomingReducer';
import popularReducers from './popularReducer';
import topRatedReducer from './topRatedReducer';
import castReducer from './castReducer';
import genresReducer from './genresReducer';

const rootReducer = combineReducers({
  movieReducers,
  popularReducers,
  topRatedReducer,
  castReducer,
  genresReducer,
});

export default rootReducer;
