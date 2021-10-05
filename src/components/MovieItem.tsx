import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Divider from '../components/common/Divider';
import moment from 'moment';
import GenresView from '../components/GenresView';
import {ClipRect, Spacer} from '../components/common';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Movie} from '../utils/models';

const MovieItem: React.FC<{film: Movie; navigation: any}> = props => {
  let {film, navigation} = props;
  return (
    <TouchableHighlight
      style={{
        borderRadius: wp(5),
      }}
      onPress={() => navigation.navigate('DetailScreen', {movieItem: film})}>
      <View style={styles.container}>
        <ClipRect imageUrl={film.poster_path} />
        <Divider height={0} width={wp(3)} />
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.releaseDate}>
            {moment(film.release_date).format('ll')}
          </Text>
          <GenresView genresIds={film.genre_ids} />
          <Divider height={wp(2)} />
          <Spacer />
          <Text style={styles.voteLabel}>{film.vote_average}%</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  title: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    width: '100%',
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
  container: {
    flexDirection: 'row',
    // minHeight: wp(50),
    backgroundColor: '#FFF',
    elevation: 4,
    shadowOffset: {width: 0, height: 0},
    padding: wp(4),
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: wp(5),
  },
});
