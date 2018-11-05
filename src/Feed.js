import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements'

const { width, height } = Dimensions.get('screen');
import API from '../API/constants'
import Box from './Box'
export default class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
          info: []
        }
    }
    componentDidMount() { 
        this.getInfo()
    }
    getInfo() {
        return fetch(API.BIDFLYER_FEED, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }
        })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          this.setState({ info: res })
        })
        .catch(e => console.log(e))
    }
    render() {
      return (
        <ScrollView contentContainerStyle={styles.container}>
            {
              this.state.info ? 
              this.state.info.map((value, i) => {
                return (
                  <Box key={i} {...value} />
                );
              }) :
              null
            }
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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