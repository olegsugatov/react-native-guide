import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Icons extends React.Component {
  
  render() {

    const { navigate } = this.props.navigation;
    
    return (
      <View>
          <StatusBar barStyle="light-content" />
          <MaterialIcon style={styles.menu}
            name="menu" onPress={() => navigate('DrawerOpen')}>
          </MaterialIcon>

          <Icon.Button style={styles.button} name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
            Login with Facebook
          </Icon.Button>
      </View>
    );
  }
}

// https://oblador.github.io/react-native-vector-icons/

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 6
  },
  button: {
    // borderRadius: 0
  },
  menu: {
    marginTop: 25,
    marginLeft: 25,
    fontSize: 27,
  },
});



export default Icons;