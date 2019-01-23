import  React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
export default class Detail extends Component {
  constructor (props) {
    super (props)
  }
  render () {
    const {navigation} = this.props
    return (
      <View>
        <Button title='go back' onPress={() => {navigation.goBack()}} />
      </View>
    )
  }
}