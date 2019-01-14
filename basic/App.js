import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Props from './views/props/Props'
import Greetings from './views/props/Greeting'
import BlinkApp from './views/state/state'
import StyleComponent from './views/sty/style'
import Press from './views/press/press'
export default class App extends Component {
  render() {
    return (
        <View>
          <Text>Hello world!</Text>
          <Props />
          <Greetings />
          <BlinkApp />
          <StyleComponent />

          <Press />
        </View>
    );
  }
}