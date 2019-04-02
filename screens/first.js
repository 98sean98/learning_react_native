import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import States from '../components/states';
import Styles from '../components/styles';

class ScreenButtons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Go to Second Screen" onPress={() => this.props.navigation.navigate('SecondScreen')} />
        <Button title="Go to Third Screen" onPress={() => this.props.navigation.navigate('ThirdScreen')} />
        <Button title="Go to Fourth Screen" onPress={() => this.props.navigation.navigate('FourthScreen')} />
      </View>
    )
  }
}

export default class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScreenButtons navigation={this.props.navigation}/>
        <View style={styles.container, {flex: 3, marginHorizontal: 20}}>
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
