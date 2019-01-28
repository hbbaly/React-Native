import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native'
const List = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
export default class FlatListDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataList:List,
      pullDown:false
    }
  }
  _list (list) {
    return <View style={styles.item}>
      <Text style={styles.itemText}>{list.item}</Text>
    </View>
  }
  _pullDown () {
    this.setState({
      pullDown: true
    })
    setTimeout(() => {
      this.setState({
        dataList:this.state.dataList.concat([0,0,0]),
        pullDown: false
      })
    }, 2000)
  }
  _pullup () {
    return <View style={styles.pullup}>
      <ActivityIndicator size={'large'} color={'red'} animate={true} />
      <Text>加载更多</Text>
    </View>
  }
  _pullupMore () {
    setTimeout(() => {
      this.setState({
        dataList:this.state.dataList.concat([0,0,0]),
      })
    },2000)
  }
  render () {
    return (
      <View>
        <FlatList
          data={this.state.dataList}
          renderItem={(list) => this._list(list)}
          refreshControl = {
            <RefreshControl 
              title={'loading'}
              titleColor={'red'}
              colors={['red']}  
              refreshing={this.state.pullDown}
              onRefresh = {() =>{
                this._pullDown()
              }}
            />
          }
          ListFooterComponent = {
            this._pullup
          }
          onEndReached = {() => {this._pullupMore()}}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  item:{
    height:200,
    width:'100%',
    color:'#fff',
    backgroundColor: 'blue',
    alignItems:'center', 
    justifyContent: 'center',
    textAlign:'center', 
  },
  itemText:{
    color:'#fff',
    fontSize:28,
  },
  pullup: {
    alignItems:'center', 
    justifyContent: 'center',
  }
})