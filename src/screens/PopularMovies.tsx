import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PopularScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>PopularScreen</Text>
    </View>
  );
};

export default PopularScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
