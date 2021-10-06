import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const MoveiLoader = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SkeletonPlaceholder speed={3000}>
        {Array.from('Feat').map((_, index) => (
          <View key={index} style={styles.wrapper} />
        ))}
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default MoveiLoader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    flexGrow: 1,
  },
  wrapper: {
    flexGrow: 1,
    height: wp(45),
    borderRadius: wp(4),
    marginBottom: wp(5),
  },
});
