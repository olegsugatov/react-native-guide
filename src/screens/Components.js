import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bar from '../components/Bar';
import Menu from '../components/Menu';
import Springboard from '../components/Springboard';
import Cards from '../components/Cards'; 

class Components extends React.Component {
  
  render() { 
    const { navigate } = this.props.navigation;

    return (
      <View>
          <Bar />
          <Menu navigation={{navigate}}/>
          <Springboard />
          <Cards />
      </View>
    );
  }
}

export default Components;
