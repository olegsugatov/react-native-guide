import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

class Images extends React.Component {
  static navigationOptions = {
    title: 'Images',
  };
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('DrawerOpen')}
          title="Navigation"
        />
        {/* Image */}
        <View>
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