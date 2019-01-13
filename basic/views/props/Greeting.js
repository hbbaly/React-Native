import React from 'react'
import { Text, View } from 'react-native'
class Greeting extends React.Component {
  render () {
    return (
      <View style = {{alignItems: 'center'}}>
        <Text>hello {this.props.name}</Text>
      </View>
    )
  }
}

export default class Greetings extends React.Component {
  render () {
    return (
      <View>
        <Greeting name='hbb' />
        <Greeting name='ly' />
        <Greeting name='hbbaly' />
      </View>
    )
  }
}