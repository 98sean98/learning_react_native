import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Listview from '../components/listview';

export default class App extends Component {
  render() {
    return (
      <Listview />
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
