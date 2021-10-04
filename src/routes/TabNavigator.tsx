import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingScreen from '../screens/UpcomingMovies';
import PopularScreen from '../screens/PopularMovies';
import TopRateScreen from '../screens/TopRatedMovies';
import TabItem from '../components/TabItem';

export enum TabRoutes {
  Popular = 'PopularScreen',
  TopRated = 'TopRatedScreen',
  Upcoming = 'UpcomingScreen',
}

export type TabBarParamList = {
  [TabRoutes.Upcoming]: undefined;
  [TabRoutes.Popular]: undefined;
  [TabRoutes.TopRated]: undefined;
};

const TopTabNavigator = (): React.ReactElement => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        swipeEnabled: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#000',
        tabBarIndicator: () => null,
        tabBarStyle: {backgroundColor: 'transparent'},
        tabBarItemStyle: {
          marginVertical: 15,
        },
      }}
      initialRouteName={TabRoutes.Upcoming}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TabItem focused={focused} label="Upcoming" />
          ),
        }}
        name={TabRoutes.Upcoming}
        component={UpcomingScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TabItem focused={focused} label="Popular" />
          ),
        }}
        name={TabRoutes.Popular}
        component={PopularScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TabItem focused={focused} label="Top Rated" />
          ),
        }}
        name={TabRoutes.TopRated}
        component={TopRateScreen}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
