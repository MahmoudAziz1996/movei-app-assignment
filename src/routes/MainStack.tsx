import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomeScreen';
import DetailPage from '../screens/MovieDetail';
import {NavigationContainer} from '@react-navigation/native';

export enum MainRoutes {
  Main = 'HomeScreen',
  Detail = 'DetailScreen',
}

export type MainStackParamList = {
  [MainRoutes.Main]: undefined;
  [MainRoutes.Detail]: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTintColor: '#000',
        }}>
        <MainStack.Screen
          options={{header: () => undefined}}
          name={MainRoutes.Main}
          component={HomePage}
        />
        <MainStack.Screen
          name={MainRoutes.Detail}
          component={DetailPage}
          options={{
            headerTitle: '',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
