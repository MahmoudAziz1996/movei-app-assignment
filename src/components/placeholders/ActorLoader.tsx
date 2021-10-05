import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ActorLoader = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <SkeletonPlaceholder>
        <View style={{flexDirection: 'row'}}>
          {Array.from('FeatX').map((_, index) => (
            <View key={index} style={styles.wrapper}>
              <View style={styles.circle} />
              <View style={styles.line} />
            </View>
          ))}
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default ActorLoader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    flexGrow: 1,
  },
  wrapper: {
    borderRadius: wp(4),
    marginRight: wp(5),
  },
  circle: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(50),
  },
  line: {
    height: wp(5),
    width: wp(20),
    marginTop: wp(2),
  },
});
