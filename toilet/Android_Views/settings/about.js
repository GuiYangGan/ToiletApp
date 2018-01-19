import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Util from './../util';

class About extends Component{
  static navigationOptions = {
    title: '关于',
  };
  render(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text}>如果问题,请联系: 150938420@qq.com</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text:{
    fontSize:16,
    fontWeight:'300',
    marginBottom:15,
    marginLeft:10,
    marginTop:3
  }
});

module.exports = About;