import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loader from '../../components/Loader';
import {COLORS} from '../../constants/Theme';
import CustomeText from '../../components/CustomeText';
import {useTranslation} from 'react-i18next';

const SplashScreen = ({navigation}: any) => {
  const {t} = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 1000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <CustomeText
        text={t('common:SplashScreen')}
        style={{
          fontSize: 28,
          fontWeight: '700',
          color: COLORS.textColor,
          marginBottom: 30,
        }}
      />

      <Loader />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.baseColor,
  },
});
