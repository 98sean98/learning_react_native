import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.displayText = this.displayText.bind(this);
  }

  handleChange(text) {
    this.setState({text});
  }

  displayText() {
    return (
      <Text style={{padding: 10, fontSize: 20}}>
        {this.state.text.split(' ').map((word) => word && 'trash').join(' ')}
      </Text>
    )
  }

  render() {
    return (
      <View style={[styles.container, {paddingTop: 20}]}>
        <TextInput style={{width: 200, textAlign: 'center', height: 40, fontSize: 20}} placeholder="Type here to translate" autoCorrect={false} onChangeText={(text) => this.setState({text})} />
        {this.displayText()}
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
