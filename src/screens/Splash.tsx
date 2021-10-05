import React from 'react';
import {StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Splash = () => {
  return (
    <LinearGradient
      colors={['#FFF', '#DDD', '#000']}
      style={styles.linearGradient}>
      <Image style={styles.image} source={require('../images/splash.png')} />
    </LinearGradient>
  );
};

export default Splash;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  image: {
    width: wp(30),
    height: wp(30),
  },
});
