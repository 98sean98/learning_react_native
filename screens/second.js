import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FlexDimensionsBasics from '../components/height-and-width';

export default class App extends Component {
  render() {
    return (
      <FlexDimensionsBasics />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
