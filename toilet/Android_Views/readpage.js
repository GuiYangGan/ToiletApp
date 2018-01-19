
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Category from './read/category';
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic';
import Util from './util';
import SettingPage from './settingpage.js';
import TWebView from './twebview';

class Hr extends Component {
  render() {
    return (
      <View>
        <View style={styles.hr}></View>
      </View>
    )
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      url: this.props.navigation.state.params.url
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  componentDidMount() {
    const url = this.state.url;
    const _this = this;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    Util.get(url, function(data) {
      if ( data.status === 1 ) {
        console.log(data.data)
        _this.setState({
          dataSource: ds.cloneWithRows(data.data)
        });
      } else {
        alert('数据调取失败')
      }
    }, function(err) {

    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (
          <TouchableOpacity style={styles.item} 
            onPress={() => {
              navigate('children2', {title: rowData.title, url: rowData.url});
            }}>
            <View>
              <Image style={styles.img} source={{uri: rowData.img}} />
            </View>
            <View style={styles.text}>
              <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
              <Text style={styles.time}>{rowData.time}</Text>
            </View>
          </TouchableOpacity>
        )} 
      />
    );
  }
}

class Read extends Component {
  static navigationOptions = {
    title: '阅读',
  };
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      recommendTopic: '',
      hotTopic: '',
      other: '',
      category: '',
      isRefreshing: false
    }
  }

  componentDidMount() {
    const _this = this;
    Util.get('http://123.57.39.116:3000/data/read?type=config', function(data){
      if(data.status === 1) {
        const obj = data.data;
        const recommendTopic = obj.recommendTopic;
        const hotTopic = obj.hotTopic;
        const other = obj.other;
        const category = obj.category;
        _this.setState({
          isShow: true,
          recommendTopic: recommendTopic,
          hotTopic: hotTopic,
          other: other,
          category: category
        });
      }
    }, function(err){

    })
  }

  _showList(keywords){
    let type = 'it';
    switch (keywords){
      case '互联网':
        type = 'it';
        break;
      case '散文':
        type = 'sanwen';
        break;
      case '笑话':
        type = 'cookies';
        break;
      case '管理':
        type = 'manager';
        break;
      default :
        type = 'it';
        break;
    }
    return type;
  }

  _onRefresh() {
    this.setState({isRefreshing: true});
    // setTimeout(() => {
    //   // prepend 10 items
    //   const rowData = Array.from(new Array(10))
    //   .map((val, i) => ({
    //     text: 'Loaded row ' + (+this.state.loaded + i),
    //     clicks: 0,
    //   }))
    //   .concat(this.state.rowData);

    //   this.setState({
    //     loaded: this.state.loaded + 10,
    //     isRefreshing: false,
    //     rowData: rowData,
    //   });
    // }, 5000);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Search />
        <Hr />
        {
          this.state.isShow ?
            <ScrollView style={styles.container}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={() => this._onRefresh()}
                />
              }>
              <Topic data={this.state.recommendTopic} 
                onPress={(title, url) => {
                  navigate('children2', {title: title, url: url});
                }} />
              <Hr />
              <Recommend name="热门推荐" data={this.state.hotTopic} 
                onPress={(title, url) => {
                  navigate('children2', {title: title, url: url});
                }}/>
              <Hr />
              <Category data={this.state.category}
                onPress={(title) => {
                  let type = this._showList(title);
                  let url = 'http://123.57.39.116:3000/data/read?type=' + type;
                  navigate('children', {title: title,url: url});
                }} />
              <Hr />
              <Recommend name="清新一刻" data={this.state.other} 
                onPress={(title, url) => {
                  navigate('children2', {title: title, url: url});
                }}/>
            </ScrollView>
          : null
        }
      </View>
    );
  }
}

const ReadPage = StackNavigator({
  main: { screen: Read },
  children: { screen: List },
  children2: { screen: TWebView },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hr: {
    borderColor: '#F0F0F0',
    borderWidth: Util.pixel,
    marginTop: 10
  },
  item: {
    height: 78,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: Util.pixel,
    flexDirection: 'row'
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 3,
    marginTop: 7
  },
  text: {
    marginLeft: 5,
    flex: 1
  },
  title: {
    fontSize: 16,
    marginTop: 10
  },
  time: {
    color: '#dddddd',
    fontSize: 13,
    marginTop: 5
  }
});

export default ReadPage;