import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MovieItem from '../components/MovieItem';
import {randomMovie} from '../utils/constants';
import {fetchPopularMovies} from '../api/movies';
import {Movie, MovieResponse} from '../utils/models';
import {Divider} from '../components/common';

const PopularScreen = ({navigation}: any) => {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPopularMovies().then(response => {
      setLoading(false);
      if (response.ok) {
        let result = response.data?.results;
        setUpcomingMovies(result);
      } else {
        console.log(response.problem);
      }
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          contentContainerStyle={{
            padding: wp(5),
          }}
          renderItem={({item}) => (
            <MovieItem navigation={navigation} film={item} />
          )}
          data={upcomingMovies?.slice(0, 10)}
          ItemSeparatorComponent={() => <Divider height={8} />}
        />
      )}
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
