import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Props from './views/props/Props'
import Greetings from './views/props/Greeting'
// import BlinkApp from './views/state/state'
import StyleComponent from './views/sty/style'
import Press from './views/press/press'
import Scroll from './views/scroll/scroll'
import FlatListBasics  from './views/scroll/FlatList'
import SectionListDemo from './views/scroll/SectionList'
import FetchDemo from './views/fetch/fetch'
import SplashScreen from 'react-native-splash-screen'
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
}
  render() {
    return (
        <ScrollView>
          <Text>Hello world!</Text>
          <Props />
          <Greetings /> 
          {/* <BlinkApp />*/}
          <StyleComponent />
          <Press />
          <Scroll />
          <FlatListBasics />
          <SectionListDemo />
          <FetchDemo />
        </ScrollView>
    );
  }
}