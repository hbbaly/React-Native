import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native'
export default class Scroll extends Component{
  // ScrollView适合用来显示数量不多的滚动元素。放置在ScrollView中的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出了屏幕外。如果你需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的FlatList组件。
  render () {
    return (
      <ScrollView style={styles.text}>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
        <Text>hbbbbbbbbbbbbbbbbbbbbbbbb</Text>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  text:{
    width:'100%',
    height:150,
    textAlign: 'center'
  }
})