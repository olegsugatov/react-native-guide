import React, { Component } from 'react';
import { StyleSheet, Text, View, 
         Image } from 'react-native';

import Menu from '../components/Menu';
import Bar from '../components/Bar';

class Images extends React.Component {

  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    const { navigate } = this.props.navigation;
    
    return (
      <View>
        <Bar />
        <Menu navigation={{navigate}}/>
        <View style={styles.container}>
          {/* Image */}
          <Image source={pic} style={styles.image}/>
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
  }
});



export default Images;