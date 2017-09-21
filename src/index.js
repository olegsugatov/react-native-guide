import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { DrawerNavigator } from 'react-navigation';
import SecondScreen from './screens/SecondScreen';
// import App from './screens/App';

const BasicApp = DrawerNavigator({
  Profile: {screen: SecondScreen}
});

export default class App extends Component {

  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />

    );
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
    height: 10,
    backgroundColor: 'powderblue'
  },
  medbox: {
    width: 100,
    height: 10,
    backgroundColor: 'skyblue'
  },
  bigbox: {
    width: 150,
    height: 10,
    backgroundColor: 'steelblue'
  },

  // lilboxf: {
  //   flex: 1,
  //   backgroundColor: 'skyblue'
  // },
  // medboxf: {
  //   flex: 2,
  //   backgroundColor: 'skyblue'
  // },
  // bigboxf: {
  //   flex:3,
  //   backgroundColor: 'steelblue'
  // }
});

const Routing = DrawerNavigator ({
  // Login: { screen: Login},
  // Welcome: { screen: Welcome},
  SecondScreen: { screen: SecondScreen}
});

AppRegistry.registerComponent('rnGuide', () => Routing);