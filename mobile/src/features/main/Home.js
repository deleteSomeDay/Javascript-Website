import {Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';
import React, {Component} from 'react';



export default class Home extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header}>Insta-Tutor</Text>
          </View>
          
          <View style={styles.container}>
            <Button
            onPress={() => {Alert.alert('Tapped');}}
            title='Submit'
            ></Button>
          </View>
        </View>
      );
    }
  }

  
const styles = StyleSheet.create({
    header:
    {
      flex: 1,
      backgroundColor: '#ffffff',
      fontSize: 25,
      textAlign: 'center',
    },
    container: {
      flex: 7,
      justifyContent: 'center',
   
      backgroundColor: '#111C24',
    },
    textbox: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#111C24',
      backgroundColor: '#ffffff',
  
    },
  });
  