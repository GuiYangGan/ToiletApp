
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Util from './../util';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={'搜索'}
          placeholderTextColor={'#5e6877'}
          style={{height: 35, borderColor: 'gray', borderWidth: Util.pixel, padding: 0,
                  borderRadius: 3, paddingLeft: 5, borderColor: '#d3d3d3', fontSize: 15}}
          underlineColorAndroid="transparent"
          autoFocus={false} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5
  }
});

export default Search;