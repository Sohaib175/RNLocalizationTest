import {StyleSheet, Text, TextProps} from 'react-native';
import {COLORS} from '../constants/Theme';

interface TxtProps extends TextProps {
  text: string;
}
const CustomeText = (params: TxtProps) => {
  return (
    <Text
      ellipsizeMode={params.ellipsizeMode ?? 'tail'}
      numberOfLines={params.numberOfLines ?? 1}
      style={[Styles.txt, params.style]}>
      {params.text}
    </Text>
  );
};
export default CustomeText;

const Styles = StyleSheet.create({
  txt: {
    color: COLORS.textColor,
    fontSize: 18,
    fontWeight: '600',
  },
});
