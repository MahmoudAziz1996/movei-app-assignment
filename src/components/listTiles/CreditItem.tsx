import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Divider, Avatar} from '../common';

interface Props {
  imagePath: string | null;
  actorName: string;
}

const CreditItem: React.FC<Props> = ({imagePath, actorName}) => {
  return (
    <View style={styles.wrapper}>
      <Avatar imageUrl={imagePath ? imagePath : ''} />
      <Divider height={wp(2)} />
      <Text style={styles.actor}>{actorName}</Text>
    </View>
  );
};

export default CreditItem;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignSelf: 'baseline',
    alignItems: 'center',
  },
  actor: {
    fontWeight: '600',
    fontSize: wp(4),
  },
});
