import React, { Component } from 'react';
import {  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,View, Text,Button } from 'react-native'
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
    this._bootstrapAsync();
  }
  componentDidMount () {
    this.props.navigation.setParams({ increaseCount: this.count })
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(userToken,'hbb')
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Home' : 'Singin');
  };
  count () {
    this.setState({
      num:this.state.num++
    })
  }
  render () {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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