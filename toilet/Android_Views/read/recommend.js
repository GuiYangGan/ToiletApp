
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Util from './../util';

// container

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      data: this.props.data
    }
  }

  _showWebPage(url) {
    alert(url)
  }

  render() {
    let views_1 = [];
    let views_2 = [];
    const data = this.state.data;
    for ( let i in data ) {
      if ( i >=0 && i < 4 ) {
        views_1.push(
          <TouchableOpacity style={styles.img_item} key={i} onPress={() => this.props.onPress(data[i].title, data[i].url)}>
            <Image
              resizeMode="cover"
              style={[styles.img, styles.shadow]}
              source={{uri: data[i].img}} />
              <Text
                style={styles.title}
                numberOfLines={2} >
                {data[i].title}
              </Text>
          </TouchableOpacity>
        );
      } else if ( i >= 4 & i < data.length ){
        views_2.push(
          <TouchableOpacity style={styles.img_item} key={i} onPress={() => this.props.onPress(data[i].title, data[i].url)}>
            <Image
              resizeMode="cover"
              style={[styles.img, styles.shadow]}
              source={{uri: data[i].img}} />
              <Text
                style={styles.title}
                numberOfLines={2} >
                {data[i].title}
              </Text>
          </TouchableOpacity>
        );
      }
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text_top}>{this.state.name}</Text>
        </View>
        <View style={styles.img_view}>
          {views_1}
        </View>
        <View style={styles.img_view}>
          {views_2}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    marginBottom: 5
  },
  shadow:{
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset:{width: 1*Util.pixel, height: Util.pixel}
  },
  img: {
    height: 120,
    width: (Util.size.width - 40) / 4
  },
  title: {
    marginTop: 4,
    fontSize: 14,
    color: '#818181'
  }
});

export default Recommend;