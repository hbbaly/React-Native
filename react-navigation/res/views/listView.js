import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ListView, StyleSheet, RefreshControl } from 'react-native'
import Toast, {DURATION} from 'react-native-easy-toast'
const data = [
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
  {name:'hbb'},
]
export default class ListViewDemo extends Component{
  constructor (props){
    super (props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
      isPullDown:true
    };
    this._pullDown()
  }

  _renderRow (rowData) {
    return <View style={styles.item}>
      <TouchableHighlight onPress={() => this.refs.toast.show(rowData.name)}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{rowData.name}</Text>
        </View>
      </TouchableHighlight>
    </View>
  }
  _pullDown () {
    setTimeout(() => {
      this.setState({
        isPullDown:false,
      })
      this.list.scrollTo({x:0,y:200,animated: true})
    }, 2000)
  }
  _separator (sectionID, rowID, adjacentRowHighlighted) {
    return <View key={rowID} style={styles.separator}>

    </View>
  }
  _footer () {
    return <View style={styles.footer}>
      <Text>这个footer</Text>
    </View>
  }
  render (){
    return (
      <View>
        <Text>ListView</Text>
        <ListView
          ref = {(list) => this.list = list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
          refreshControl = {
            <RefreshControl
            title={'loading'}
              titleColor={'red'}
              colors={['red']}  
              refreshing={this.state.isPullDown}
              onRefresh = {() =>{
                this._pullDown()
              }}/>
          }
          renderSeparator = {(sectionID, rowID, adjacentRowHighlighted) => this._separator(sectionID, rowID, adjacentRowHighlighted)}
          renderFooter = {() => this._footer()}
         />
          <Toast ref="toast" position='center'/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  item:{
    flex:1,
    width:'100%',
    height:100,
  },
  itemContainer:{
    height:100,
    width:'100%',
    alignItems:'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
  },
  separator:{
    height:1,
    backgroundColor:'#f60'
  },
  footer:{
    height:100,
    backgroundColor:'blue'
  }
})