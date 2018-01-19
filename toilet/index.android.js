
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import WcPage from './Android_Views/wcpage.js';
import ReadPage from './Android_Views/readpage.js';
import WeatherPage from './Android_Views/weatherpage.js';
import SettingPage from './Android_Views/settingpage.js';

const TabNavigatorItem = TabNavigator.Item;

const WC=require('./images/wc.png');
const READ=require('./images/read.png');
const WEATHER=require('./images/weather.png');
const SETTING=require('./images/setting.png');

const WC_PRESS=require('./images/wc_press.png');
const READ_PRESS=require('./images/read_press.png');
const WEATHER_PRESS=require('./images/weather_press.png');
const SETTING_PRESS=require('./images/setting_press.png');

class toilet extends Component {
  constructor(){
    super();
    this.state={
      selectedTab:'WC',
    }
  }
 /**
 tab点击方法
 **/
  onPress(tabName){
    if(tabName){
      this.setState({
        selectedTab:tabName,
      });
    }
  }
  /**
  渲染每项
  **/
  renderTabView(title,tabName,tabContent,isBadge){
    var tabNomal;
    var tabPress;
    switch (tabName) {
      case 'WC':
        tabNomal=WC;
        tabPress=WC_PRESS;
        break;
      case 'Read':
        tabNomal=READ;
        tabPress=READ_PRESS;
        break;
      case 'Weather':
        tabNomal=WEATHER;
        tabPress=WEATHER_PRESS;
        break;
      case 'Setting':
        tabNomal=SETTING;
        tabPress=SETTING_PRESS;
        break;
      default:

    }
    return(
      <TabNavigatorItem
        title={title}
        renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
        renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
        selected={this.state.selectedTab === tabName}
        selectedTitleStyle={{color:'#1296db'}}
        onPress={()=>this.onPress(tabName)}
        renderBadge={()=>isBadge ? <View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View>:null} >
      {tabContent}
      </TabNavigatorItem>
    );
  }

  /**
  自定义tabbar
  **/
 tabBarView(){
    return (
      <View style={{flex:1}}>
        <TabNavigator tabBarStyle={styles.tab} >
          {this.renderTabView('卫生间', 'WC',  <WcPage />, false)}
          {this.renderTabView('阅读',  'Read', <ReadPage />, false)}
          {this.renderTabView('天气',  'Weather',  <WeatherPage />, false)}
          {this.renderTabView('设置',  'Setting',  <SettingPage />, false)}
        </TabNavigator>
      </View>
    );
  }

  render() {
    var tabBarView=this.tabBarView();
    return (
      <View style={styles.container}>
        {tabBarView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tab:{
    height: 52,
    alignItems:'center',
    backgroundColor:'#f4f5f6',
  },
  tabIcon:{
    width:25,
    height:25,
  },
  badgeView:{
    width:22,
    height:14 ,
    backgroundColor:'#f85959',
    borderWidth:1,
    marginLeft:10,
    marginTop:5,
    borderColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
 },
  badgeText:{
    color:'#fff',
    fontSize:8,
  }
});

AppRegistry.registerComponent('toilet', () => toilet);
