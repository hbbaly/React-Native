import React, { Component } from 'react';
import { Button, View, Alert } from 'react-native'
export default  class Press extends Component {
  constructor (props) {
    super (props)
  }
  render () {
    return (
      <View>
        <Button onPress = {() => {Alert.alert('You tapped the button!')}} title="点我"></Button>
      </View>
    )
  }
}