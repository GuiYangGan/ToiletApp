
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio
} from 'react-native';

// 1) fetch
// 2) 获取屏幕的宽高
// 3) 获取最小线宽

export default {
  size: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  pixel: 1 / PixelRatio.get(),
  get: function(url, successCallback, failCallback) {
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      successCallback(responseJson);
    })
    .catch((error) => {
      failCallback(error);
    });
  }
};
