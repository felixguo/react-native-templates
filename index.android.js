/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Picker
} from 'react-native';

//var SearchBar = require('react-native-search-bar');

export default class android_client extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Hello, World!
        </Text>
         <ScrollView>
          <Text style={{fontSize:32}}>Scroll me plz</Text>
          <Image source={require('./img/zoro.jpeg')} />
          <Image source={require('./img/zoro-naked.jpeg')} />
          <Image source={require('./img/zoro.jpeg')} />
        </ScrollView>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('android_client', () => android_client);
