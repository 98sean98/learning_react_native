import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

class FlatListBasics extends Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
  }

  handleData() {
    const data = [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ];
    return data;
  }

  renderItem = ({item}) => (
    <Text style={styles.item}>{item.key}</Text>
  )

  render() {
    return (
      <FlatList data={this.handleData()} renderItem={this.renderItem} />
    )
  }
}

class SectionListBasics extends Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);

  }

  handleData() {
    const data = [
      {title: 'D', data: ['Devin']},
      {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
    ];
    return data;
  }

  renderItem = ({item, index, section}) => (
    <Text style={styles.item} key={index}>{item}</Text>
  )

  renderSectionHeader = ({section}) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  )

  keyExtractor(item, index) {index}

  render() {
    return (
      <SectionList sections={this.handleData()} renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={(item, index) => index}
      />
    )
  }
}

export default class Listview extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatListBasics />
        <SectionListBasics />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
