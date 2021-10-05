import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {filterGenresById} from '../utils/helpers';

export interface Props {
  genresIds: Array<number>;
}

const GenresView: React.FC<Props> = ({genresIds}) => {
  const genres = filterGenresById(genresIds);

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {genres.slice(0, 5).map(item => {
        return (
          <View key={item.id} style={styles.gnreWrapper}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default GenresView;

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontWeight: '500',
    fontSize: wp(3.5),
  },
  gnreWrapper: {
    backgroundColor: '#ddd',
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
    borderRadius: wp(50),
    margin: 2,
  },
});
