import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import TabNavigator from '../routes/TabNavigator';
const HomeScreen = ({navigation}: any): React.ReactElement => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text style={styles.headerTitle}>Movies</Text>,
      title: '',
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
    fontWeight: 'bold',
    fontSize: wp(7),
  },
});
