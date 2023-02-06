import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CustomeText from '../../components/CustomeText';
import TextInputCustome from '../../components/InputField';
import TextButton from '../../components/TextButton';
import CustomeButton from '../../components/CustomeButton';
import {COLORS} from '../../constants/Theme';
import {useTranslation} from 'react-i18next';
type nav = {
  navigation: unknown;
};
const LoginScreen = ({route, navigation}: any) => {
  const {t} = useTranslation();
  return (
    <View style={styles.main}>
      <CustomeText text={t('common:login')} style={styles.login} />
      <TextInputCustome variant="email" onChangeText={text => {}} />
      <TextInputCustome variant="password" onChangeText={text => {}} />
      <CustomeButton
        txt={t('common:login')}
        onPress={async () => {
          navigation.navigate('BottomTabs');
        }}
      />
      <View style={styles.register}>
        <CustomeText text={t('common:noAccount')} />
        <TextButton
          txt={t('common:signUp')}
          // style={{}}
          txtStyle={{color: COLORS.secondaryColor}}
          onPress={() => {
            navigation.navigate('SignupScreen');
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

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
