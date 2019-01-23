import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import NavigationBar from './navigationBar'

export default class Singin extends Component{
  render () {
    return (
      <View>
        <NavigationBar title='登陆页面' />
        <Text>这里是登陆页面</Text>
      </View>
    )
  }
}