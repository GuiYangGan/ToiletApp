
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import Util from './util';
import TWebView from './twebview';

class WeatherPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TWebView type="weather"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default WeatherPage;