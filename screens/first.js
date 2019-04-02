import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import States from '../components/states';
import Styles from '../components/styles';

export default class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, {flex: 2, marginHorizontal: 20, borderWidth:1, borderColor:'black'}]}>
          <States />
          <Styles />
        </View>
      </View>
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
