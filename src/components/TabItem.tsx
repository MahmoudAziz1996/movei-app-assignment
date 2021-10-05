import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export interface Props {
  focused: boolean;
  label: string;
}

const TabItem: React.FC<Props> = ({focused, label}) => {
  return (
    <View
      style={{
        backgroundColor: focused ? '#67B239' : '#D8D8D8',
        borderRadius: wp(50),
        padding: 8,
        paddingHorizontal: 12,
        shadowOpacity: focused ? 0.3 : 0,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 10,
        elevation: focused ? 15 : 0, //Shadow For Android
        width: wp(30),
      }}>
      <Text
        style={{
          textAlign: 'center',
          borderRadius: wp(50),
          color: focused ? '#FFF' : '#000',
          fontSize: wp(4),
          fontWeight: '600',
        }}>
        {label}
      </Text>
    </View>
  );
};

export default TabItem;
