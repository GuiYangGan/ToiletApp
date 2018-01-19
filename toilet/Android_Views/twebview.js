
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
const nearby = require('./nearby.html');
const weather = require('./weather.html');

class TWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowErrorPage: false
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title ? `${navigation.state.params.title}` : '',
  });

  _loadError(){
    this.setState({
      isShowErrorPage: true
    });
  }

  render() {
    let url;
    if ( this.props.type === 'wc' ) {
      url = nearby;
    } else if ( this.props.type === 'weather' ) {
      url = weather;
    } else {
      url = {uri: this.props.navigation.state.params.url}
    }
    return (
      <View style={styles.container}>
        {
          this.state.isShowErrorPage ?
            <View style={styles.errInfo}>
              <Text style={styles.errText}>
                不好意思，请检查网络情况或者报告错误
              </Text>
            </View>
            :
            <WebView 
              onError={this._loadError.bind(this)}
              startInLoadingState={true}
              domStorageEnabled={true}  
              javaScriptEnabled={true}
              source={url} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errText: {
    fontSize: 16,
    fontWeight: '300'
  }
});

export default TWebView;