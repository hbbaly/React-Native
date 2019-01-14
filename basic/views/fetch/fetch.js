import React, { Component } from 'react';
import { View, Text, Image, Alert, FlatList, StyleSheet } from 'react-native'
export default class FetchDemo extends Component{
  constructor (props) {
    super (props)
    this.state = {
      list:[],
      loading:true
    }
  }
  componentDidMount () {
    this.FetchData()
  }
  FetchData () {
    fetch('https://cnodejs.org/api/v1/topics').then(res => res.json())
    .then(resJson => {
      // return resJson.movies;
      this.setState(prevState => ({
        list:[...prevState.list, ...resJson.data],
        loading:false
      }))
    })
    .catch(error => {
      console.error(error);
    });
  }
  loadingVIew () {
    return (
      <View style={styles.container}>
        <Text>
          正在加载数据……
        </Text>
      </View>
    )
  }
  render () {
      if(this.state.loading){
        return (
          this.loadingVIew()
        )
      }
      return (
        <View>
        <FlatList
          data={this.state.list}
          renderItem = {({item}) => <Text key={item}>{item.id}</Text>}>
        </FlatList>
      </View>
      )
  }
}
const styles = StyleSheet.create({
  container:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    zIndex:100,
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
})