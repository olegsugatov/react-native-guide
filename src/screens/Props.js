import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

class Props extends React.Component {
  static navigationOptions = {
    title: 'Props',
  };
  render() {
    
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('DrawerOpen')}
          title="Navigation"
        />

        {/* Props in Action */}
        <View>
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
    // backgroundColor: '#F5FCFF',
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
});


export default Props;