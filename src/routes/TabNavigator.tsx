import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingScreen from '../screens/UpcomingMovies';
import PopularScreen from '../screens/PopularMovies';
import TopRateScreen from '../screens/TopRatedMovies';

const Tab = createMaterialTopTabNavigator();

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
  return (
    <Tab.Navigator>
      <Tab.Screen name={TabRoutes.Upcoming} component={UpcomingScreen} />
      <Tab.Screen name={TabRoutes.Popular} component={PopularScreen} />
      <Tab.Screen name={TabRoutes.TopRated} component={TopRateScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
