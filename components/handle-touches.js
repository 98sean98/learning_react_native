import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Platform } from 'react-native';

class Touchables extends Component {
  constructor(props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleLongButtonPress = this.handleLongButtonPress.bind(this);
  }

  handleButtonPress() {
    Alert.alert('short press!');
  }

  handleLongButtonPress() {
    Alert.alert('long press!');
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight onPress={this.handleButtonPress} underlayColor="grey">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this.handleButtonPress} onLongPress={this.handleLongButtonPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
            onPress={this.handleButtonPress}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback
            onPress={this.handleButtonPress}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    )
  }
}

export default class HandleTouches extends Component {
  constructor(props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress() {
    Alert.alert('**** you! That hurts');
  }

  render() {
    return (
      <View style={[styles.container, {flex: 5}]} >
        <View style={[styles.container, {margin: 10, flexDirection: 'row', justifyContent:'space-between', borderWidth:1, borderColor: 'orange'}]}>
          <Button title="Press Me" onPress={this.handleButtonPress} />
          <Button title="Press Me" onPress={this.handleButtonPress} color="black"/>
        </View>
        <View style={styles.container, {flex: 6}}>
          <Touchables />
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
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
