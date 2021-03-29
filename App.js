import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import {AppTabNavigator} from './Components/AppTabNavigator';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export default function App() {
  return (
    <AppContainer></AppContainer>   
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen : WelcomeScreen},
  BottomTab : {screen : AppTabNavigator}
});

const AppContainer = createAppContainer(switchNavigator);

