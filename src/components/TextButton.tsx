import {
  GestureResponderEvent,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import CustomeText from './CustomeText';

interface TextButtonType extends TouchableOpacityProps {
  txt: string;
  txtStyle?: TextStyle;
  onPress: (event: GestureResponderEvent) => any;
}

const TextButton = (params: TextButtonType) => {
  return (
    <TouchableOpacity
      onPress={params.onPress}
      style={[styles.mainContainer, params.style]}>
      <CustomeText text={params.txt} style={params.txtStyle} />
    </TouchableOpacity>
  );
};

export default TextButton;
const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 6,
  },
});
