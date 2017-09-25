import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import Menu from '../components/Menu';
import Bar from '../components/Bar';

class Props extends React.Component {
  render() {
    
    const { navigate } = this.props.navigation;
    
    return (
      <View >

        <Bar />
        <Menu navigation={{navigate}}/>
        {/* Props in Action */}
        <View style={styles.container}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});


export default Props;