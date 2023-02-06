import {Alert, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomeText from '../../components/CustomeText';
import TextInputCustome from '../../components/InputField';
import TextButton from '../../components/TextButton';
import CustomeButton from '../../components/CustomeButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/Theme';
import {useTranslation} from 'react-i18next';
const SignUpScreen = ({navigation}: any) => {
  const {t} = useTranslation();
  return (
    <View style={styles.main}>
      <CustomeText text={t('common:signUp')} style={styles.login} />
      <TextInputCustome variant="email" onChangeText={text => {}} />
      <TextInputCustome variant="password" onChangeText={text => {}} />
      <CustomeButton
        txt={t('common:signUp')}
        onPress={() => {
          Alert.alert('Navigate to Home Screen');
        }}
      />
      <View style={styles.register}>
        <CustomeText text={t('common:alreadyHaveAccount')} />
        <TextButton
          txt={t('common:login')}
          // style={{}}
          txtStyle={{color: COLORS.secondaryColor}}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: COLORS.baseColor,
  },
  login: {
    fontSize: 48,
    marginBottom: 10,
  },
  inputBg: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    fontSize: 18,
  },
  register: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
