import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
export default class Index extends Component{
  constructor (props) {
    super (props)
  }
  render () {
    const { navigation } = this.props
    return (
      <View>
        <Button title='go Detail' onPress={() => {navigation.navigate('Detail',{id:'hbb'})}} />
        <Button style={{marginTop:20}} title='go Detail' onPress={() => {navigation.navigate('NavTab')}} />
        <Button style={{marginTop:20}} title='go DrawerNav' onPress={() => {navigation.navigate('DrawerNav')}} />
      </View>
    )
  }
}