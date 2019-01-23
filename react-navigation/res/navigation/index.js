import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from '../views/index'
import Detail from '../views/details'
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
    }
  },
  {
    initialRouteName: "Home"
  }
)

export default createAppContainer(appContainer)