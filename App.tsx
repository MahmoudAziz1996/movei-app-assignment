/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
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
