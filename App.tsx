import React from 'react';
import {StatusBar, View} from 'react-native';
import Route from './src/routes/MainStack';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Route />
    </View>
  );
};

export default App;
