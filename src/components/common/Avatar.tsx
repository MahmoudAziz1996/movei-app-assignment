import React, {useState} from 'react';
import {Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {LOGO_PATH} from '../../utils/constants';

interface Props {
  imageUrl: string;
  width?: number;
  height?: number;
}

const Avatar: React.FC<Props> = ({imageUrl, width, height}) => {
  const [loading, setLoading] = useState<boolean>(true);

  let imagePath = imageUrl
    ? {uri: `${LOGO_PATH}${imageUrl}`}
    : require('../../images/blank-profile.jpg');
  return (
    <Image
      style={{
        height: height || wp(20),
        width: width || wp(20),
        borderRadius: wp(50),
        borderWidth: 0.5,
        borderColor: '#ddd',
      }}
      onLoad={() => setLoading(false)}
      source={loading ? require('../../images/placeholder.jpeg') : imagePath}
    />
  );
};

export default Avatar;
