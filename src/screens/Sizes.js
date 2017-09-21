import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

class Sizes extends React.Component {
  static navigationOptions = {
    title: 'Sizes',
  };
  render() {
    
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('DrawerOpen')}
          title="Navigation"
        />
        {/* Width / Height*/} 
        <View style={styles.lilbox}/>
        <View style={styles.medbox}/>
        <View style={styles.bigbox}/>
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
});


export default Sizes;