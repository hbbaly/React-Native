import React, { Component } from 'react';
import { View, Text,Button } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

class Index extends Component{
  static navigationOptions = ({navigation}) => {
    return {
      title:'Index',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      headerRight:(
        <Button onPress={() => navigation.getParam('increaseCount')}  title='count'></Button>
      )
    }
  }
  constructor(props){
    super(props)
    this.state = {
      text:'这是Index页面',
      num:0
    }
    console.log(this.props)
  }
  componentDidMount () {
    this.props.navigation.setParams({ increaseCount: this.count })
  }
  count () {
    this.setState({
      num:this.state.num++
    })
  }
  render () {
    return (
      <View>
        <Text>{this.state.text}</Text>
        <Text>{this.state.num}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',{id:'hbb',increaseCount:this.props.navigation.getParam('increaseCount') })}
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