import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Props from './views/props/Props'
import Greetings from './views/props/Greeting'
import BlinkApp from './views/state/state'
export default class App extends Component {
  render() {
    return (
        <View>
          <Text>Hello world!</Text>
          <Props />
          <Greetings />
          <BlinkApp />
        </View>
    );
  }
}