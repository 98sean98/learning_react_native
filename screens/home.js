import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="1st Screen" onPress={() => this.props.navigation.navigate('FirstScreen')} />
        <Button title="2nd Screen" onPress={() => this.props.navigation.navigate('SecondScreen')} />
        <Button title="3rd Screen" onPress={() => this.props.navigation.navigate('ThirdScreen')} />
        <Button title="4th Screen" onPress={() => this.props.navigation.navigate('FourthScreen')} />
        <Button title="5th Screen" onPress={() => this.props.navigation.navigate('FifthScreen')} />
        <Button title="6th Screen" onPress={() => this.props.navigation.navigate('SixthScreen')} />
      </View>
    )
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
