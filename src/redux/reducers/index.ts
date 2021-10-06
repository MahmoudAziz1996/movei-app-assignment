import {combineReducers} from 'redux';
import movieReducers from './upcomingReducer';
import popularReducers from './popularReducer';
import topRatedREducer from './topRatedReducer';

const rootReducer = combineReducers({
  movieReducers,
  popularReducers,
  topRatedREducer,
});

export default rootReducer;
