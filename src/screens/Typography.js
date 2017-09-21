import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Typography extends React.Component {
    
    render() {
    
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('DrawerOpen')}
          title="Navigation"
        />
        {/* Text */}
        <View>
          <Text style={styles.welcome}>
            Welcome to Typography!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
  // backgroundColor: '#F5FCFF',
});

export default Typography;