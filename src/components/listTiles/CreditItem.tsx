import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Divider from '../common/Divider';
import ClipRect from '../common/ClipRRect';

interface Props {
  imagePath: string | null;
  actorName: string;
}

const CreditItem: React.FC<Props> = ({imagePath, actorName}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'baseline',
        alignItems: 'center',
      }}>
      <ClipRect
        width={wp(20)}
        height={wp(20)}
        rounded
        imageUrl={imagePath ? imagePath : ''}
      />
      <Divider height={wp(2)} />
      <Text
        style={{
          fontWeight: '600',
          fontSize: wp(4),
        }}>
        {actorName}
      </Text>
    </View>
  );
};

export default CreditItem;

const styles = StyleSheet.create({});
