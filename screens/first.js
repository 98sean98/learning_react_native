import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import States from '../components/states';
import Styles from '../components/styles';

class ScreenButtons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="2nd Screen" onPress={() => this.props.navigation.navigate('SecondScreen')} />
        <Button title="3rd Screen" onPress={() => this.props.navigation.navigate('ThirdScreen')} />
        <Button title="4th Screen" onPress={() => this.props.navigation.navigate('FourthScreen')} />
        <Button title="5th Screen" onPress={() => this.props.navigation.navigate('FifthScreen')} />
      </View>
    )
  }
}

export default class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScreenButtons navigation={this.props.navigation}/>
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
