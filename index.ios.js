/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class rnGuide extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
    // Text
    <View style={styles.container}>
      
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text>Hello{this.props.name} !</Text> 
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
      </View>

      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>

      <View style={styles.lilbox}/>
      <View style={styles.medbox}/>
      <View style={styles.bigbox}/>

      <View style={styles.lilboxflex}/>
      <View style={styles.medboxflex}/>
      <View style={styles.bigboxflex}/>
    </View>
    );
  }
}

class LotsOfGreeting extends Component {
    render() {
        <View style={{alignItem: 'center'}}>
            <Greeting name='Rexxar' />
            <Greeting name='Jaina' />
            <Greeting name='Valeera' />
        </View>
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  lilbox: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  },
  medbox: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue'
  },
  bigbox: {
    width: 150,
    height: 150,
    backgroundColor: 'steelblue'
  },

  // lilboxflex: {
  //   flex: 1,
  //   backgroundColor: 'skyblue'
  // },
  // medboxflex: {
  //   flex: 2,
  //   backgroundColor: 'skyblue'
  // },
  // bigboxflex: {
  //   flex:3,
  //   backgroundColor: 'steelblue'
  // }
});

AppRegistry.registerComponent('rnGuide', () => rnGuide);
