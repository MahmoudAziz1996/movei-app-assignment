import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MovieItem from '../components/listTiles/MovieItem';
import {Divider} from '../components/common';
import MoveiLoader from '../components/placeholders/MoveiLoader';
import {connect} from 'react-redux';
import {fetchUpcomingMovies} from '../redux/actions';
import NetwokError from '../components/NetwokError';

interface Props {
  navigation: any;
  fetchUpcomingMovies: Function;
  movieReducers: any;
}

const UpcomingScreen: React.FC<Props> = ({
  navigation,
  fetchUpcomingMovies,
  movieReducers,
}) => {
  const {isFetching, upcomingMovies, error} = movieReducers;
  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  return (
    <View style={styles.wrapper}>
      {error && <NetwokError onRefresh={fetchUpcomingMovies} />}

      {isFetching ? (
        <MoveiLoader />
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          renderItem={({item}) => (
            <MovieItem navigation={navigation} film={item} />
          )}
          data={upcomingMovies?.slice(0, 15)}
          ItemSeparatorComponent={() => <Divider height={8} />}
        />
      )}
    </View>
  );
};
function mapStateToProps(state: any) {
  return {
    movieReducers: state.movieReducers,
  };
}

export default connect(mapStateToProps, {fetchUpcomingMovies})(UpcomingScreen);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  listContainer: {
    padding: wp(5),
    paddingTop: wp(2),
  },
});
