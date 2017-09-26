import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Menu from '../components/Menu';
import Bar from '../components/Bar';

class Sizes extends React.Component {

  render() {
    
    const { navigate } = this.props.navigation;
    
    return (
      <View>
        <Bar />
        <Menu navigation={{navigate}} />
        
        <View style={styles.container}>
          {/* Width / Height*/} 
          <View style={styles.lilbox} />
          <View style={styles.medbox} />
          <View style={styles.bigbox} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
});

  // backgroundColor: "#FF5A62",

export default Sizes;