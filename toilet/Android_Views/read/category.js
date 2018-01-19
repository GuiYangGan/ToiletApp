
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
import ReadPage from './../readpage';
import Util from './../util';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  // press(title) {
  //   let title = title;
  //   this.props.onPress;
  // }

  render() {
    const data = this.state.data;
    let views_1 = [];
    let views_2 = [];
    for ( let i in data ) {
      let item = (
        <View style={styles.row_item} key={i}>
          <TouchableOpacity style={styles.item} onPress={() => this.props.onPress(data[i].text)}>
            <Text style={styles.text}>{data[i].text}</Text>
          </TouchableOpacity>
        </View>
      )
      if ( i < 2 ) {
        views_1.push(item);
      } else {
        views_2.push(item);
      }
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text_top}>分类</Text>
        </View>
        <View style={styles.row}>
          {views_1}
        </View>
        <View style={styles.row}>
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
  row: {
    flexDirection: 'row'
  },
  row_item: {
    flex: 1
  },
  item: {
    height: 80,
    width: (Util.size.width - 30) / 2,
    borderWidth: Util.pixel,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 17,
    color: '#707070',
    fontWeight: '400'
  }
});

export default Category;