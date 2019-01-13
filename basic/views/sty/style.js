import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'
export default class StyleComponent extends Component{
  render () {
    return (
      <View>
        <Text style = {styles.color}>样式的应用</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  color: {
    color: 'red'
  },
})