import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MovieItem from '../components/listTiles/MovieItem';
import {connect} from 'react-redux';
import {fetchTopRatedMovies} from '../redux/actions';
import {Divider} from '../components/common';
import MoveiLoader from '../components/placeholders/MoveiLoader';
import NetwokError from '../components/NetwokError';

interface Props {
  navigation: any;
  fetchTopRatedMovies: Function;
  topRatedReducer: any;
}

const TopRatedScreen: React.FC<Props> = ({
  navigation,
  fetchTopRatedMovies,
  topRatedReducer,
}) => {
  const {isFetching, topRatedMovies, error} = topRatedReducer;

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  return (
    <View style={styles.wrapper}>
      {error && <NetwokError onRefresh={fetchTopRatedMovies} />}
      {isFetching ? (
        <MoveiLoader />
      ) : (
        <FlatList
          contentContainerStyle={{
            padding: wp(5),
            paddingTop: wp(2),
          }}
          renderItem={({item}) => (
            <MovieItem navigation={navigation} film={item} />
          )}
          data={topRatedMovies?.slice(0, 15)}
          ItemSeparatorComponent={() => <Divider height={8} />}
        />
      )}
    </View>
  );
};
function mapStateToProps(state: any) {
  return {
    topRatedReducer: state.topRatedReducer,
  };
}

export default connect(mapStateToProps, {fetchTopRatedMovies})(TopRatedScreen);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
