
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Util from './../util';

class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let views = [];
    const data = this.props.data;
    for ( let i in data ) {
      views.push(
        <TouchableOpacity style={styles.img_item} key={i} onPress={() => this.props.onPress(data[i].title, data[i].url)}>
          <Image
            resizeMode="cover"
            style={styles.img} 
            source={{uri: data[i].img}} />
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text_top}>推荐专题</Text>
        </View>
        <View style={styles.img_view}>
          {views}
        </View>
        <TouchableOpacity>
          <Text style={styles.text_buttom}>查看更多同期专题 &gt;</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  text_top: {
    color: '#5E5E5E',
    marginTop: 12,
    marginBottom: 8,
    fontSize: 16
  },
  img_view: {
    flexDirection: 'row'
  },
  img_item: {
    flex: 1
  },
  img: {
    height: 80,
    width: (Util.size.width - 30) / 2,
    borderRadius: 5
  },
  text_buttom: {
    color: '#ccc',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 13,
    fontWeight: '300'
  }
});

export default Topic;