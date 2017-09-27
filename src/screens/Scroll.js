import React, { Component } from 'react';
import { StyleSheet, Text, View, 
         ScrollView } from 'react-native';

import Menu from '../components/Menu';
import Bar from '../components/Bar';

class Scroll extends React.Component {
    
    render() {
    
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Bar />
        <Menu navigation={{navigate}}/>

        <ScrollView style={styles.container}>
          <Text style={styles.welcome}>Welcome to Typography!</Text>
          <Text style={styles.instructions}>
          Mustache umami selfies, lo-fi keffiyeh kitsch portland. 
          Chambray +1 swag tofu vape intelligentsia brunch everyday carry, 
          man braid venmo glossier meditation wayfarers fanny pack health 
          goth. YOLO pickled waistcoat selfies four dollar toast live-edge, 
          poke ramps microdosing cardigan master cleanse vinyl. +1 subway 
          tile squid everyday carry, pabst copper mug tousled palo santo 
          offal pinterest. Slow-carb polaroid tacos, sustainable small 
          batch glossier cred. Drinking vinegar asymmetrical wolf affogato
          narwhal plaid art party. Letterpress bitters tbh flannel +1. 
          8-bit jianbing aesthetic messenger bag taiyaki health goth 
          forage cronut small batch keffiyeh skateboard you probably 
          haven't heard of them PBR&B raw denim locavore. Raw denim 
          vaporware hell of typewriter.

          Kombucha tbh twee af freegan asymmetrical bitters next level
          intelligentsia aesthetic offal vice. Brunch humblebrag cornhole,
          roof party +1 direct trade banjo fanny pack marfa skateboard beard
          seitan. You probably haven't heard of them biodiesel poutine 
          fashion axe humblebrag echo park kale chips. Occupy vinyl 
          stumptown, squid +1 heirloom lumbersexual vaporware green juice
          salvia shoreditch. Ugh bespoke austin deep v poutine woke, 
          PBR&B kickstarter. Cray pok pok lyft meditation PBR&B. Kale
          chips waistcoat activated charcoal, squid selvage synth plaid
          3 wolf moon. Vegan la croix post-ironic plaid gluten-free. 
          Post-ironic VHS tousled hoodie, scenester try-hard godard pug
          retro snackwave vice stumptown fixie.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginBottom: 40
  },
  welcome: {
    // fontFamily: 'GothamProBlack',
    // fontFamily: 'Zapfino',
    // fontFamily: 'Gotham',
    // fontFamily: 'Inconsalata-Regular',

    // justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 90,
    fontSize: 90,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 40,
    fontWeight: '900'
  },
  instructions: {
    // color: '#333333',
    lineHeight: 25,
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 100
  }
});

export default Scroll;