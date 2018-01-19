
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import TWebView from './twebview';
import Util from './util';

class WcPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TWebView type="wc" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default WcPage;