import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import Splash from '../screens/Splash';
import Route from './MainStack';

const Controller = () => {
  const [currentScreen, setCurrent] = useState('Splash');

  useEffect(() => {
    const timer = setTimeout(() => setCurrent('Auth'), 1500);
    return () => clearTimeout(timer);
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      {currentScreen == 'Splash' ? <Splash /> : <Route />}
    </View>
  );
};

export default Controller;
