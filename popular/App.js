/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Toast, {DURATION} from 'react-native-easy-toast';
import HTMLView from 'react-native-htmlview';
import HomeScreen  from './res/views/index'
import DetailsScreen from './res/views/detail'
import ModalScreen from './res/views/modalScreen'
import Singin from './res/views/singin'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Singin:Singin
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions:{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    initialRouteName:'Main',
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);
class App extends Component {
  // constructor(props){
  //   super (props)
  //     this.state = {
  //       selectedTab:'home',
  //       homeView:'homeView',
  //       profileView:'profileView'
  //     }
  // }

  // render() {
  //   const htmlContent = `<ul class="list">
  //   <li class="list-item">
  //     <h4 class="__title __aboutus">关于我们</h4>
  //     <p class="__text">隶属于重庆天极云服科技有限公司，创建于2015年1月，是专业的数码设备维修平台，平台通过整合线上线下相关资源，向国内用户提供方便快捷、安全可靠的优质数码产品维修服务。</p>
  //   </li>
  //   <li class="list-item">
  //     <h4 class="__title">关于维修中心</h4>
  //     <p class="__text">目前，开通的维修产品线包括苹果iPhone、iPad、小米手机、三星手机、华为手机、乐视、OPPO、vivo、努比亚、魅族手机，并正在积极准备其他产品的上线。同时我们还在全国30余个城市建有维修中心，支持本地上门维修，其他省市用户支持邮寄维修。平台已入驻有数百名专业维修工程师，全部经过考核认证，熟悉手机原理及硬件结构，可准确的判断出故障所在，高质量完成维修。</p>
  //   </li>
  //   <li class="list-item">
  //     <h4 class="__title">关于零配件</h4>
  //     <p class="__text">一律采用高品质零配件，维修故障点终身质保，维修全程视频录像。在更换维修配件时严格把关，拆机过程也是力求做到精益求精，不损伤机器的外观;修复后，对机器进行全面的功能性检测，以防出现其他问题。</p>
  //   </li>
  //   <li class="list-item">
  //     <h4 class="__title">我们的使命</h4>
  //     <p class="__text">致力于解决数码产品令人头痛的售后维修问题，为用户提供高品质数码维修服务。;修复后，对机器进行全面的功能性检测，以防出现其他问题。</p>
  //   </li>
  // </ul>`;
  //   return (
  //     <View style={styles.container}>
  //      <TabNavigator>
  //         <TabNavigator.Item
  //           selected={this.state.selectedTab === 'home'}
  //           title="首页"
  //           selectedTitleStyle = {{color:'blue'}}
  //           renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
  //           renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/ic_polular.png')} />}
  //           badgeText="1"
  //           onPress={() => this.setState({ selectedTab: 'home' })}>
  //           <View>
  //             <ScrollView>
  //               <Text>首页</Text>
  //               <Button onPress={()=> {this.refs.toast.show('hello toast!')}} title='toast'></Button> 
  //               <Toast ref="toast" position='top' positionValue={300}/>  
  //               <HTMLView
  //                 value={htmlContent}
  //                 stylesheet={styles}
  //               />  
  //             </ScrollView>    
  //           </View>
  //         </TabNavigator.Item>
  //         <TabNavigator.Item
  //           selected={this.state.selectedTab === 'profile'}
  //           title="收藏"
  //           renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_star.png')} />}
  //           renderSelectedIcon={() => <Image  style={[styles.image,{tintColor:'blue'}]}  source={require('./res/images/ic_star.png')} />}
  //           // renderBadge={() => <CustomBadgeView />}
  //           onPress={() => this.setState({ selectedTab: 'profile' })}>
  //          <IndexContainer />
  //         </TabNavigator.Item>
  //       </TabNavigator>
  //     </View>
  //   );
  // }
  render () {
    return <AppContainer />;
  }
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  image: {
    width:22,
    height:22,
  },
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});
