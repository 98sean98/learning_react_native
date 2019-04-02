import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './screens/home';
import FirstScreen from './screens/first';
import SecondScreen from './screens/second';
import ThirdScreen from './screens/third';
import FourthScreen from './screens/fourth';
import FifthScreen from './screens/fifth';
import SixthScreen from './screens/sixth';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    FirstScreen: FirstScreen,
    SecondScreen: SecondScreen,
    ThirdScreen: ThirdScreen,
    FourthScreen: FourthScreen,
    FifthScreen: FifthScreen,
    SixthScreen: SixthScreen,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
