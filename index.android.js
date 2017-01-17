/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import FirstPageComponent from './FirstPageComponent'

export default class AwesomePrject extends Component {
  render() {
    let defaultName = 'FirstPageComponent';
    let defaultComponent = FirstPageComponent
    return (
      <Navigator
        initialRoute={{name:'My first Scene',index:0}}
      />
    );
  }
}



AppRegistry.registerComponent('AwesomePrject', () => AwesomePrject);
