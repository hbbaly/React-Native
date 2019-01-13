import React from 'react'
import { Image } from 'react-native'
export default class Props extends React.Component {
  render () {
    let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <Image source={pic} style={{width: '100%', height: 200}} />
    )
  }
}