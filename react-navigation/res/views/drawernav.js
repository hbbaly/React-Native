import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation'
import { View, Text, Button } from 'react-native'
class Page1 extends Component {
  render () {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>这里是page1</Text>
      <Button title='open drawer' onPress = {() =>
        this.props.navigation.openDrawer()
      }></Button>
      <Button title='close drawer' onPress = {() =>
        this.props.navigation.closeDrawer()
      }></Button>
       <Button title='close drawer' onPress = {() =>
        this.props.navigation.toggleDrawer()
      }></Button>
    </View>
    )
  }
}
class Page2 extends Component {
  render () {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>这里是page2</Text>
      <Button title='open drawer' onPress = {() =>
        this.props.navigation.openDrawer()
      }></Button>
      <Button title='close drawer' onPress = {() =>
        this.props.navigation.closeDrawer()
      }></Button>
       <Button title='close drawer' onPress = {() =>
        this.props.navigation.toggleDrawer()
      }></Button>
    </View>
    )
  }
}
const MyDrawerNavigator = createDrawerNavigator({
  Page1: {
    screen: Page1,
  },
  Page2: {
    screen: Page2,
  },
});
export default MyDrawerNavigator