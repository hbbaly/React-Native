import  React, {Component} from 'react'
import { View, Text, Button, TextInput } from 'react-native'
export default class Detail extends Component {
  constructor (props) {
    super (props)
  }
  render () {
    const { navigation } = this.props
    const id = navigation.getParam('id','no id')
    return (
      <View>
        <Text>{id}</Text>
        <Button title='go back' onPress={() => {navigation.goBack()}} />
        <TextInput style={{width:400,height:50,borderWidth:1,borderColor:'#ccc'}} onChangeText={text => {
          navigation.setParams({id:text})
          }
        } />
      </View>
    )
  }
}