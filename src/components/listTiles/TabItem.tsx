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
        shadowOpacity: focused ? 0.4 : 0,
        shadowRadius: 12,
        elevation: focused ? 16 : 0, //Shadow For Android
        ...styles.wrapper,
      }}>
      <Text
        style={{
          color: focused ? '#FFF' : '#000',
          ...styles.title,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: wp(50),
    padding: 8,
    paddingHorizontal: 12,
    width: wp(30),
    shadowOffset: {width: 0, height: 0},
  },
  title: {
    fontSize: wp(4),
    fontWeight: '600',
    textAlign: 'center',
    borderRadius: wp(50),
  },
});
