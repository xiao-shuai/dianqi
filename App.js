/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ALlPAGE from './dianqi/config/page'
import alldata from './dianqi/data/data'
import {Provider} from 'mobx-react'

type Props = {};
console.disableYellowBox=true
export default class App extends Component<Props> {
  render() {
    return (
      <Provider  {...alldata}>
      <ALlPAGE />
      </Provider>
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
