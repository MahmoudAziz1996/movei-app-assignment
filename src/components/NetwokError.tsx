import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props {
  onRefresh: Function;
}
const NetwokError: React.FC<Props> = ({onRefresh}) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require('../images/disconected.png')}
      />
      <Text style={styles.errorText}>
        Oops Something went wrong ,Chech your connection , then refresh the page
      </Text>
      <TouchableOpacity onPress={() => onRefresh()} style={styles.btn}>
        <Text style={styles.btnText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NetwokError;

const styles = StyleSheet.create({
  wrapper: {
    margin: wp(5),
    marginTop: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4B859B',
    padding: wp(5),
    borderRadius: wp(5),
    elevation: 6,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: wp(80),
    height: wp(40),
  },
  errorText: {
    color: '#FFF',
    fontSize: wp(4.2),
    fontWeight: '500',
    marginVertical: wp(5),
  },
  btn: {
    paddingHorizontal: wp(15),
    paddingVertical: wp(3),
    backgroundColor: '#FFF',
    borderRadius: wp(10),
  },
  btnText: {
    color: '#4B859B',
    fontWeight: 'bold',
    fontSize: wp(4),
  },
});
