import React, { Component } from 'react';
import { View, Text,Button } from 'react-native'
// import { createStackNavigator, createAppContainer } from "react-navigation";
class DetailsScreen extends React.Component {
  constructor (props){
    super(props)
    console.log(this.props.navigation.getParam('id'))   // hbb
    console.log(this.props.navigation.getParam('name','aly'))   // name不存在，会返回null，赋予了默认值不多做处理 aly
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button title="再次进入Details" onPress = {() => this.props.navigation.navigate('Details')} ></Button>
        <Button title="使用push再次进入Details" onPress = {() => this.props.navigation.push('Details')} ></Button>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen
//   },
//   {
//     initialRouteName: "Home"
//   }
// );
export default DetailsScreen