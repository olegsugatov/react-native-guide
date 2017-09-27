import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView,
         Button, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';

// icon sets
// https://oblador.github.io/react-native-vector-icons/
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Menu from '../components/Menu';
import Bar from '../components/Bar';

class Buttons extends React.Component {
  
    _onPressButton() {
        Alert.alert("You tapped on the button"); 
    }

    render() {
    
    const { navigate } = this.props.navigation;

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    return (
      
      <View>
        <Bar />
        <Menu navigation={{navigate}} />

      <ScrollView>
          <View style={styles.container}>
            <View style={styles.btn_wrapper}>
             <Button style={styles.loginbtn}
                 title="Login" 
                 onPress={this._onPressButton} />
            </View>

            <View style={styles.alternativeLayoutButtonContainer}>
              <Button title="Sign In"
                onPress={this._onPressButton}/>
              <Button title="Sign Up" color="#841584"
                onPress={this._onPressButton}/>
            </View>
             
             <View style={styles.btn_wrapper}> 
               <Icon.Button style={styles.facebookbtn}
                  name="facebook" onPress={this._onPressButton}>
                  Login with Facebook
               </Icon.Button>
             </View>

               <TouchableHighlight style={styles.TouchableHighlightBtn} 
                                   onPress={this._onPressButton}>
                  <Text style={styles.buttonText}>Touchable Highlight</Text>
               </TouchableHighlight>

               <TouchableOpacity style={styles.TouchableOpacityBtn} 
                                 onPress={this._onPressButton}>
                  <Text style={styles.buttonText}>TouchableOpacity</Text>
               </TouchableOpacity>

             <View style={styles.btn_wrapper}>
                <TouchableHighlight onPress={this._onPressButton}>
                  <Image source={pic} style={styles.image} />
                </TouchableHighlight>
            </View>
          </View>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 120,
  },
  btn_wrapper: {
    marginVertical: 30,
    // alignItems: 'center', 
  },
  signin: {
    backgroundColor: '#3b5998',
  },
  alternativeLayoutButtonContainer: {
    marginHorizontal: 60,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  facebookbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 25
  },
  TouchableHighlightBtn: {
    backgroundColor: '#FA5A62',
    alignItems: 'center',
    padding: 28,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    // justifyContent: 'center',
  },
  TouchableOpacityBtn: {
    backgroundColor: '#6B4DFD',
    alignItems: 'center',
    padding: 14,
    borderRadius: 30,
    marginTop: 20
    // width: 270,
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 6,
    alignItems: 'center'
  }
});

export default Buttons;