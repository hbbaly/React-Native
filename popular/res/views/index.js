import React, { Component } from 'react';
import { View, Text,Button } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

class Index extends Component{
  constructor(props){
    super(props)
    this.state = {
      text:'这是Index页面'
    }
    console.log(this.props)
  }
  render () {
    return (
      <View>
        <Text>{this.state.text}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',{id:'hbb'})}
        />
      </View>
    )
  }
}
// const AppNavigator  = createStackNavigator({
//   Index: {
//     screen: Index
//   }
// })
export default Index