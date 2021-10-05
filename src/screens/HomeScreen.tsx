import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import TabNavigator from '../routes/TabNavigator';
const HomeScreen = ({navigation}: any): React.ReactElement => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Text style={styles.headerTitle}>Movies</Text>,
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <TabNavigator />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    paddingTop: wp(4),
    fontWeight: 'bold',
    fontSize: wp(7),
    paddingLeft: wp(4),
    backgroundColor: '#fff',
  },
});
