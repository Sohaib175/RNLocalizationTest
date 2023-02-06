import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../constants/Theme';

const Loader = () => {
  return (
    <ActivityIndicator
      size="large"
      color={COLORS.textColor}
      style={{alignSelf:'center'}}
    />
  );
};

export default Loader;
