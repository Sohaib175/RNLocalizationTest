import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ViewStyle,
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants/Theme';

interface InputType extends TextInputProps {
  variant?: 'email' | 'password';
  bgStyle?: ViewStyle;
  leftIcon?: React.FC;
}

const TextInputCustome = (params: InputType) => {
  const {t} = useTranslation();
  const [isSecure, setIsSecure] = useState(false);
  let extraProps: TextInputProps = {};
  switch (params.variant) {
    case 'email':
      extraProps.autoComplete = 'email';
      extraProps.textContentType = 'emailAddress';
      extraProps.autoCapitalize = 'none';
      extraProps.placeholder = t('common:email');
      extraProps.autoCorrect = false;
      extraProps.keyboardType = 'email-address';
      break;
    case 'password':
      extraProps.autoComplete = 'password';
      extraProps.textContentType = 'password';
      extraProps.autoCapitalize = 'none';
      extraProps.placeholder = t('common:password');
      extraProps.autoCorrect = false;
      extraProps.secureTextEntry = isSecure;
      break;
    default:
      extraProps.textContentType = 'none';
      extraProps.autoCapitalize = 'none';
      extraProps.autoCorrect = true;
      break;
  }
  return (
    <View style={[styles.inputContainer, params.bgStyle]}>
      {params.leftIcon && <params.leftIcon />}
      <TextInput
        placeholder={params.placeholder}
        onChangeText={params.onChangeText}
        placeholderTextColor={params.placeholderTextColor ?? COLORS.lightGray1}
        style={[
          {marginLeft: params.leftIcon && 10},
          styles.inputField,
          params.style,
        ]}
        {...extraProps}
      />
      {params.variant === 'password' && (
        <TouchableOpacity
          onPress={() => {
            setIsSecure(!isSecure);
          }}>
          <FontAwesome
            name={isSecure ? 'eye-slash' : 'eye'}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputCustome;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGray1,
    paddingHorizontal: 10,
    marginVertical: 6,
    height: 50,
  },
  inputField: {
    flex: 1,
    fontSize: 18,
    color: COLORS.textColor,
    backgroundColor: 'transparent',
  },
});
