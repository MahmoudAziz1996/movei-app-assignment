import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [
    'movieReducers',
    'upcomingReducers',
    'topRatedReducer',
    'castReducer',
  ],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(/*logger,*/ thunk),
);

export const persistor = persistStore(store);
