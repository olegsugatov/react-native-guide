import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Menu extends React.Component {
    
    render() {
		const { navigate } = this.props.navigation;
	    // console.log("props", this.props)
	    return (
	      <MaterialIcon style={styles.menu}
	        name="menu" onPress={() => navigate('DrawerOpen')}>
	      </MaterialIcon>
	    );
  	}
}

const styles = StyleSheet.create({
  menu: {
    marginTop: 25,
    marginBottom: 15,
   	marginLeft: 25,
    fontSize: 27
  },
});

export default Menu;