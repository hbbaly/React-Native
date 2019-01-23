import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet, StatusBar, Platform } from  'react-native'
const StatusBarDefault = {
  barStyle:PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  hidden: PropTypes.bool,
  backgroundColor: PropTypes.string
}
const IOS_STATUS_BAR_HEIGHT = 44
const ANDROID_STATUS_BAR_HEIGHT = 50
const STATUS_BAR_HEIGHT = 20
export  default class NavigationBar extends Component{
  static propTypes = {
    style:PropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    statusBar: PropTypes.shape(StatusBarDefault),
    rightButton: PropTypes.element,
    leftButton: PropTypes.element
  }
  static defaultProps = {
    statusBar:{
      barStyle: 'light-content',
      hidden:false
    }
  }
  constructor (props) {
    super (props)
    this.state = {
      title:'',
      hide:false
    }
  }
  getButtonElement(data) {
    return (
        <View>
            {data? data : null}
        </View>
    );
}
  render () {
    let statusBar = this.props.statusBar?
    <View style = {styles.statusBar}>
      <StatusBar {...this.props.statusBar} ></StatusBar>
    </View>
    : null
    let titleView = this.props.titleView||<View><Text style = {styles.title}>{this.props.title}</Text></View>
    let content = this.props.hide?null:
    <View style={styles.navigationContainer}>
      {this.getButtonElement(this.props.leftButton)}
      <View style={styles.titleContainer}>
        {titleView}
      </View>
      {this.getButtonElement(this.props.rightButton)}
    </View>
    return (
      <View  style={[styles.container, this.props.style]}>
        <statusBar />
        <content />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  statusBar:{
    height:Platform.OS==='ios'?STATUS_BAR_HEIGHT:0
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  navigationContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    height: Platform.OS === 'ios'? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'gray',
},
})