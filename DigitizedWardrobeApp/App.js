/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return React.createElement(Text, {style: styles.description},"What kind of style are you feeling today?");
  }
}

const styles = StyleSheet.create({
    description:{
        fontSize: 24,
        textAlign: 'center',
        color: '#656565',
        marginTop: 65,
    },

});
