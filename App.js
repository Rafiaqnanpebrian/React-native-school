/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Judul from './Components/Judul';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
	<Text style={styles.instructions}>{instructions}</Text>
}); */


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

        <View style={styles.container}>
        <Judul title="BIODATA"/>
        <Judul title="LOGIN"/>
        <Judul title="FORM"/>
        <Text style={styles.welcome}>Sugeng Rawuh Mase!</Text>
        <Text style={styles.welcome}>Nama:Rafi Aqnan Pebrian</Text>
		<Text style={styles.welcome}>Kelas:XI RPL 4</Text>
		<Text style={styles.welcome}>No:25</Text>
		<Image 
		style={{width: 100, height: 100}}
		source={require('./Rafi.jpg')}/>
		
        
      </View>
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
 /* instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },*/
});
