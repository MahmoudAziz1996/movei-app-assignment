import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Controller from './src/routes/Controller';

export default function App() {
  return (
    <Provider store={store}>
      <Controller />
    </Provider>
  );
}
