import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TopRatedMovies = () => {
  return (
    <View style={styles.wrapper}>
      <Text>TopRatedMovies</Text>
    </View>
  );
};

export default TopRatedMovies;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
