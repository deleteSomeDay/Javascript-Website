import { Button, ThemeProvider } from 'react-native-elements';
import {Platform, StyleSheet, Text, View, Image, TextInput, Alert} from 'react-native';
import React, {Component} from 'react';

const theme = 
{
  Button:
  {
    raised: true,
  },
};

   export default class Login extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header}>Welcome to Insta-Tutor</Text>
          </View>
          
          <View style={styles.container}>
            <Text>Sign-Up Now</Text>
            <TextInput 
            style={styles.textbox}
            placeholder='Enter your Phone Number'
            onSubmitEditing
            >
            </TextInput>
            <ThemeProvider theme={theme}>
              <Button
              onPress={() => { this.props.navigation.navigate("Home")} }
              title='Submit'
              ></Button>
            </ThemeProvider>
            
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
  