import React from 'react';
import {Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {LOGO_PATH} from '../../utils/constants';

interface Props {
  imageUrl: string;
  width?: number;
  height?: number;
  rounded?: boolean;
}

const ClipRRect: React.FC<Props> = ({imageUrl, width, height, rounded}) => {
  return (
    <Image
      style={{
        height: height || '100%',
        width: width || '30%',
        borderRadius: rounded ? wp(50) : wp(5),
        borderWidth: 0.5,
        borderColor: '#ddd',
      }}
      source={{
        uri: `${LOGO_PATH}${imageUrl}`,
      }}
    />
  );
};

export default ClipRRect;
