import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {fetchGenres} from '../redux/actions';

const Splash = () => {
  return (
    <View style={styles.linearGradient}>
      <Image style={styles.image} source={require('../images/splash.png')} />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    genresReducer: state.genresReducer,
  };
}

export default connect(mapStateToProps, {fetchGenres})(Splash);

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
