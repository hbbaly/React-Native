import React from 'react'
import { Button, View, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from '../views/index'
import Detail from '../views/details'
import FlatListDemo from '../views/faltlist'
import TabNavigator from '../views/tabbar'
import MyDrawerNavigator from '../views/drawernav'
import SwipeableFlatList from '../views/swipeableFlatList'
import ListViewDemo from '../views/listView'
const appContainer = createStackNavigator(
  { 
    Home:{
      screen: Index,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Index',
          headerRight:(
            <Button title='detail' onPress = { () =>
              navigation.navigate('Detail')
            } />
          ),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
          }
        }
      }
    },
    Detail:{ 
      screen: Detail,
      
      navigationOptions: ({navigation}) => {
        return {
          title: navigation.getParam('id','Detail'),
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
          }
        }
      }
    },
    NavTab:{
      screen:TabNavigator,
      navigationOptions: ({navigation}) => {
        return {
          title: 'TabNavigator',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
          }
        }
      }
    },
    DrawerNav:{
      screen:MyDrawerNavigator,
      navigationOptions: ({navigation}) => {
        return {
          title: 'MyDrawerNavigator',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
          }
        }
      }
    },
    FlatList:{
      screen:FlatListDemo,
      navigationOptions: ({navigation}) => {
        return {
          title: 'FlatListDemo',
        }
      }
    },
    SwipeableFlatList:{
      screen:SwipeableFlatList,
      navigationOptions:{
        title:'SwipeableFlatList'
      }
    },
    ListView:{
      screen:ListViewDemo,
      navigationOptions:{
        title:'ListViewDemo'
      }
    }
  },
  {
    initialRouteName: "Home"
  }
)

export default createAppContainer(appContainer)