import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export interface Props {
  focused: boolean;
  label: string;
}

const TabItem: FC<Props> = ({focused, label}) => {
  return (
    <View
      style={{
        backgroundColor: focused ? '#67B239' : '#D8D8D8',
        borderRadius: wp(50),
        padding: 8,
        paddingHorizontal: 12,
        shadowOpacity: focused ? 0.2 : 0,
        shadowOffset: {width: 0, height: 8},
        shadowRadius: 5,
        elevation: focused ? 4 : 0, // For Android
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
