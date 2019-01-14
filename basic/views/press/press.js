import React, { Component } from 'react';
import { Button, View, Text, Alert,TouchableHighlight, StyleSheet } from 'react-native'
export default  class Press extends Component {
  constructor (props) {
    super (props)
  }
  // 不用bind(this)
  // onLongPress 是长按
  press () {
    Alert.alert('You tapped the button!')
  }
  onLongPressButton () {
    Alert.alert('You onLongPress the button!')
  }
  render () {
    return (
      <View>
        <Button onPress = {this.press} title="点我"></Button>
        <TouchableHighlight underlayColor="white" onLongPress = {this.onLongPressButton}>
          <View style = {styles.button}>
            <Text style = {styles.buttonText}>hbbbbb</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})