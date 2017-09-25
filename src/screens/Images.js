import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  StatusBar
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Images extends React.Component {
  
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    const { navigate } = this.props.navigation;
    
    return (
      <View>
          <StatusBar barStyle="light-content" />
          <MaterialIcon style={styles.menu}
            name="menu" onPress={() => navigate('DrawerOpen')}>
          </MaterialIcon>
      <View style={styles.container}>
        {/* Image */}
        <View>
          <Image source={pic} style={styles.image}/>
        </View>
      </View>
      </View>
    );
  }
}

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
  menu: {
    marginTop: 25,
    marginLeft: 25,
    fontSize: 27,
  },
});



export default Images;