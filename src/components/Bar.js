import React, { Component } from 'react';
import { StatusBar } from 'react-native';

class Bar extends React.Component {
  render() { 
    return (<StatusBar barStyle="light-content" />);
  }
}

export default Bar;
