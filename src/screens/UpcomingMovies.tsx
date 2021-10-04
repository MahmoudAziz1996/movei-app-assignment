import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const UpcomingScreen = ({navigation}: any) => {
  return (
    <View style={styles.wrapper}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpcomingScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
