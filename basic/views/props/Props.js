import React from 'react'
import { Image,View,Text, Dimensions,Platform ,StyleSheet} from 'react-native'
export default class Props extends React.Component {
  componentDidMount () {
    
  }
  render () {
    let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style = {styles.container}>
        <Image source={pic} style={{width: '100%', height: 200}} />
        <Text>设备宽度：{Dimensions.get('window').width}</Text>
        <Text>设备高度：{Dimensions.get('window').height}</Text>
        <Text>ScreenScale：{Dimensions.get('window').scale}</Text>
        <Text>{Platform.OS}</Text>
        <Text>{Platform.Version}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "red"
      },
      android: {
        backgroundColor: "blue"
      }
    })
  }
});