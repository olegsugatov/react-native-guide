import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image
} from 'react-native';

export default class rnGuide extends Component {
  render() {
    
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (

      <View style={styles.container}>

      {/* Text */}
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
      </View>

      {/* Image */}
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>

      {/* Props in Action */}
      <View>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>

      {/* Width / Height */}
        <View style={styles.lilbox}/>
        <View style={styles.medbox}/>
        <View style={styles.bigbox}/>

        {/*Positioning*/}
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>


      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
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

AppRegistry.registerComponent('rnGuide', () => rnGuide);
