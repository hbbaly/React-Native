import  React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
export default class Detail extends Component {
  constructor (props) {
    super (props)
  }
  render () {
    const { navigation } = this.props
    console.log(navigation)
    const id = navigation.getParam('id','no id')
    return (
      <View>
        <Text>{id}</Text>
        <Button title='go back' onPress={() => {navigation.goBack()}} />
      </View>
    )
  }
}