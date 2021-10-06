import {combineReducers} from 'redux';
import movieReducers from './upcomingReducer';
import popularReducers from './popularReducer';
import topRatedReducer from './topRatedReducer';
import castReducer from './castReducer';

const rootReducer = combineReducers({
  movieReducers,
  popularReducers,
  topRatedReducer,
  castReducer,
});

export default rootReducer;
