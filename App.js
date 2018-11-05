/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, 
  Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';

import Feed from './src/Feed';
const { width, height } = Dimensions.get('screen');
const instructions = `Welcome to ${Platform.OS.toLocaleLowerCase()} BidFlyer test app`;

export default class App extends Component {
  render() {
    return [
        <Feed />
    ];
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
  buttonContainer: {
    minWidth: 100,
    backgroundColor: 'gray',
  }
});








