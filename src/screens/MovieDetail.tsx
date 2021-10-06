import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ClipRect, Divider} from '../components/common';
import CreditItem from '../components/listTiles/CreditItem';
import GenresView from '../components/GenresView';
import {Movie} from '../utils/models';
import ActorLoader from '../components/placeholders/ActorLoader';
import {connect} from 'react-redux';
import {fetchMovieCast} from '../redux/actions';

interface Props {
  route: any;
  fetchMovieCast: Function;
  castReducer: any;
}

const MovieDetail: React.FC<Props> = ({route, fetchMovieCast, castReducer}) => {
  const {isFetching, movieCasts, error} = castReducer;

  const movieItem: Movie = route.params.movieItem;

  useEffect(() => {
    fetchMovieCast(movieItem.id);
  }, []);

  return (
    <ScrollView
      style={{backgroundColor: '#fff'}}
      contentContainerStyle={styles.scrollContainer}>
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
          {isFetching ? (
            <ActorLoader />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{}}
              renderItem={({item}) => (
                <CreditItem
                  actorName={item.name}
                  imagePath={item.profile_path}
                />
              )}
              data={movieCasts?.slice(0, 10)}
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

function mapStateToProps(state: any) {
  return {
    castReducer: state.castReducer,
  };
}

export default connect(mapStateToProps, {fetchMovieCast})(MovieDetail);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: wp(5),
    paddingVertical: wp(2),
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
