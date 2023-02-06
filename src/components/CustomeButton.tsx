import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {COLORS} from '../constants/Theme';
import CustomeText from './CustomeText';

interface CustomeButtonProps extends TouchableOpacityProps {
  txt: string;
  txtStyle?: TextStyle;
  left?: React.FC;
}

const CustomeButton = (params: CustomeButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, params.style]}
      disabled={params.disabled}
      onPress={params.onPress}>
      <View
        style={{
          // flex: 1,
          alignItems: 'flex-end',
          paddingRight: 10,
        }}>
        {params.left && <params.left />}
      </View>
      <CustomeText
        text={params.txt}
        style={[styles.txtStyle, params.txtStyle]}
      />
      {/* <View style={{flex: 1, backgroundColor: 'red'}}></View> */}
    </TouchableOpacity>
  );
};

export default CustomeButton;
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 6,
    borderWidth: 1,

    borderRadius: 10,
    borderColor: COLORS.lightGray1,
  },
  txtStyle: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '500',
  },
});
