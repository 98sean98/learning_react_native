import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { StyleSheet, Text, View, Button } from 'react-native';
import FirstScreen from './screens/first';
import SecondScreen from './screens/second';
import ThirdScreen from './screens/third';
import FourthScreen from './screens/fourth';
import FifthScreen from './screens/fifth';

const AppNavigator = createStackNavigator(
  {
  FirstScreen: FirstScreen,
  SecondScreen: SecondScreen,
  ThirdScreen: ThirdScreen,
  FourthScreen: FourthScreen,
  FifthScreen: FifthScreen,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
