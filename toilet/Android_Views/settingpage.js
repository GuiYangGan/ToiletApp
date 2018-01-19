
import React, { Component,PropTypes  } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  TouchableOpacity,
  NavigatorIOS,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TWebView from './twebview';

import Util from './util';
import About from './settings/about';
import Help from './settings/help';
import Detail from './settings/detail';
import Tips from './settings/tips';

const logo = require('./../images/wc_press.png')

class Setting extends Component {

  static navigationOptions = {
    title: '设置',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        
        <View style={styles.container}>
          <View style={{justifyContent:'center', alignItems: 'center',backgroundColor:'#fff',borderTopWidth:Util.pixel,borderColor:'#ccc'}}>
            <Image style={styles.icon} source={logo} resizeMode="contain"/>
            <Text style={[styles.text, {fontSize:13, marginLeft: 2}]}>v1.0.0</Text>
          </View>
          <TouchableOpacity 
            onPress={() => {
              navigate('children2');
            }}>
            <View style={styles.item}>
              <Text style={styles.text}>功能介绍</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {
              navigate('children');
            }}>
            <View style={styles.item}>
              <Text style={styles.text}>帮助中心</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {
              navigate('children3');
            }}>
            <View style={styles.item}>
              <Text style={styles.text}>服务条款</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {
              navigate('children4');
            }}>
            <View style={styles.item}>
              <Text style={styles.text}>关于</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const SettingPage = StackNavigator({
  main: { screen: Setting },
  children: { screen: Help },
  children2: { screen: Detail },
  children3: { screen: Tips },
  children4: { screen: About },
});


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  item:{
    height:50,
    backgroundColor:'#fff',
    borderBottomWidth: Util.pixel,
    borderColor:'#ccc',
    justifyContent: 'center'
  },
  bg:{
    backgroundColor: '#FFF',
    height:40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:15,
    marginLeft:10,
    color: '#7E7F7E'
  },
  icon:{
    width:88,
    height:100
  }
});

export default SettingPage;