import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Menu from '../components/Menu';
import Bar from '../components/Bar';

// icon sets
// https://oblador.github.io/react-native-vector-icons/
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Icons extends React.Component {
  
  render() {

    const { navigate } = this.props.navigation;
    
    return (
      <View>
          <Bar />
          <Menu navigation={{navigate}}/>
        
        <View style={styles.content}>
          <Icon.Button style={styles.button} 
            name="facebook" onPress={this.loginWithFacebook}>
            Login with Facebook
          </Icon.Button>
          
          <View style={styles.fbwrapper}>
          <Icon style={styles.fbutton} 
            name="facebook" onPress={this.loginWithFacebook}>
          </Icon>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 30
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 25
  },
  fbwrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#3b5998',     
    marginTop: 50
  },
  fbutton: {
    fontSize: 28,
    paddingHorizontal: 25,
    paddingVertical: 20,
    color: 'white',
  }
});

export default Icons;
