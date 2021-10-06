import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MovieItem from '../components/listTiles/MovieItem';
import {Movie} from '../utils/models';
import {Divider} from '../components/common';
import {connect} from 'react-redux';
import {fetchPopularMovies} from '../redux/actions';
import MoveiLoader from '../components/placeholders/MoveiLoader';
import NetwokError from '../components/NetwokError';

interface Props {
  navigation: any;
  fetchPopularMovies: Function;
  popularReducer: any;
}

const PopularScreen: React.FC<Props> = ({
  navigation,
  fetchPopularMovies,
  popularReducer,
}) => {
  const {isFetching, popularMovies, error} = popularReducer;

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <View style={styles.wrapper}>
      {error && <NetwokError onRefresh={fetchPopularMovies} />}
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
          data={popularMovies?.slice(0, 15)}
          ItemSeparatorComponent={() => <Divider height={8} />}
        />
      )}
    </View>
  );
};
function mapStateToProps(state: any) {
  return {
    popularReducer: state.popularReducers,
  };
}

export default connect(mapStateToProps, {fetchPopularMovies})(PopularScreen);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
