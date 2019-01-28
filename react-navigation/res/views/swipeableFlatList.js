import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, RefreshControl,TouchableHighlight, SwipeableFlatList } from 'react-native'
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
  _quickActions () {
    console.log('hbb')
    return <View style={styles.quickActions}>
      <TouchableHighlight onPress={() => alert("确认删除？")}>
        <View>
          <Text style={styles.text}>删除</Text>
        </View>
      </TouchableHighlight>
    </View>
  }
  render () {
    return (
      <View>
        <SwipeableFlatList
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
          renderQuickActions = {() =>{this._quickActions()}} //创建侧滑菜单
          maxSwipeDistance={80}//可展开（滑动）的距离
          bounceFirstRowOnMount={true}//进去的时候不展示侧滑效果
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
    height:100,
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
  },
  quickActions:{
    flex:1,
    width:100,
    height:100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red'
  },
  text: {
    color:'#fff'
  }
})