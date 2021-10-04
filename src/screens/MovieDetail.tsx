import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MovieDetail = (): React.ReactElement => {
  return (
    <View style={styles.wrapper}>
      <Text>Detail Screen</Text>
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
