import React from 'react';
import {View, Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {COLORS} from './src/constants/Theme';
// import IonicIcons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './src/screens/auth/LoginScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import SplashScreen from './src/screens/auth/SplashScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import SettingsScreen from './src/screens/Home/SettingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import './src/constants/IMLocalize';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const {t} = useTranslation();
  return (
    // <NavigationContainer>
    <Tab.Navigator
    // screenOptions={({route}) => ({
    //   tabBarIcon: ({focused, color, size}) => {
    //     let iconName;
    //     if (route.name === 'Home') {
    //       iconName = focused ? 'ios-home' : 'ios-home-outline';
    //     } else if (route.name === 'Settings') {
    //       iconName = focused ? 'ios-settings' : 'ios-settings-outline';
    //     }
    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    //   tabBarActiveTintColor: 'tomato',
    //   tabBarInactiveTintColor: 'gray',
    //   headerShown: false,
    // })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: t('navigate:home'), title: t('navigate:home')}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: t('navigate:settings'),
          title: t('navigate:settings'),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center'}}
        initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // initialParams={{trans: t}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          // initialParams={{trans: t}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignUpScreen}
          // initialParams={{trans: t}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabs"
          component={RootNavigator}
          // initialParams={{trans: t}}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const headerStyle = {
//   title: 'Movies',
//   headerStyle: {backgroundColor: COLORS.baseColor},
//   headerTitleStyle: {color: COLORS.textColor},
//   headerLeft: () => (
//     <IonicIcons name="menu" size={34} color={COLORS.textColor} />
//   ),
//   headerRight: () => (
//     <IonicIcons name="search" size={25} color={COLORS.textColor} />
//   ),
// };

export default App;
