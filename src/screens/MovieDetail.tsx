import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {fetchMovieCast} from '../api/movies';
import {ClipRect, Divider} from '../components/common';
import CreditItem from '../components/CreditItem';
import GenresView from '../components/GenresView';
import {Movie, Cast} from '../utils/models';

interface Props {
  route: any;
  navigation: any;
}

const MovieDetail: React.FC<Props> = ({route, navigation}) => {
  const movieItem: Movie = route.params.movieItem;
  const [credits, setCredits] = useState<Cast[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMovieCast(movieItem.id).then(response => {
      setLoading(false);
      if (response.ok) {
        let result = response.data?.cast;
        setCredits(result);
      } else {
        console.log(response.problem);
      }
    });
  }, []);

  return (
    <ScrollView
      style={{backgroundColor: '#fff'}}
      contentContainerStyle={{
        flexGrow: 1,
        padding: wp(5),
        paddingVertical: wp(2),
      }}>
      <View style={styles.wrapper}>
        <View style={styles.topSection}>
          <ClipRect
            width={wp(50)}
            height={wp(80)}
            imageUrl={movieItem.poster_path}
          />
          <Divider height={wp(2)} />
          <Text style={styles.title}>{movieItem.title}</Text>
          <Divider height={wp(2)} />
          <Text style={styles.voteLabel}>{movieItem.vote_average}%</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Divider height={wp(2)} />
          <Text style={styles.OverviewDesc}>{movieItem.overview}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Genres</Text>
          <Divider height={wp(2)} />
          <GenresView genresIds={movieItem.genre_ids} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Credits</Text>
          <Divider height={wp(4)} />
          {loading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                padding: wp(5),
              }}
              renderItem={({item}) => (
                <CreditItem
                  actorName={item.name}
                  imagePath={item.profile_path}
                />
              )}
              data={credits?.slice(0, 10)}
              ItemSeparatorComponent={() => (
                <Divider width={wp(3)} height={0} />
              )}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: wp(4),
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  releaseDate: {
    fontSize: wp(4),
    color: '#646464',
    marginVertical: wp(3),
  },
  voteLabel: {
    fontWeight: 'bold',
    color: '#67B239',
    fontSize: wp(5.2),
    textAlign: 'right',
  },
  section: {
    paddingVertical: wp(3),
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: wp(5),
  },
  OverviewDesc: {
    color: '#656565',
    fontSize: wp(3.5),
    fontWeight: '500',
  },
});
