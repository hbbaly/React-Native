import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native' 
class FadeInView extends Component{
  state = {
    fadeAnim:new Animated.Value(0)  // 初始透明度设为0
  }
  componentDidMount () {
    Animated.timing(
      this.state.fadeAnim,{
        toValue:1,
        duration:10000,
      }
    ).start()  // 开始执行
  }  
  render() {
    return (
      <Animated.View style={{...this.props.style,opacity:this.state.fadeAnim}}>
        {this.props.children}
      </Animated.View>
    )
  }
}
export default FadeInView