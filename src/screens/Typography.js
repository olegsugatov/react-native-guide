import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';       

class SecondScreen extends React.Component {

      render() {

      return (
       <View style={styles.container}>
        {/* Text */}
        <View>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
        </View>
        </View>
    );
  }
}