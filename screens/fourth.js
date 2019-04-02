import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HandleTextInput from '../components/handle-text-input';
import HandleTouches from '../components/handle-touches';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HandleTextInput />
        <HandleTouches />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
