import React, {useState, useEffect} from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import Splash from '../screens/Splash';
import Route from './MainStack';

const Controller = () => {
  const [currentScreen, setCurrent] = useState('Splash');

  useEffect(() => {
    const timer = setTimeout(() => setCurrent('Auth'), 1500);
    return () => clearTimeout(timer);
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      {currentScreen == 'Splash' ? <Splash /> : <Route />}
    </SafeAreaView>
  );
};

export default Controller;
