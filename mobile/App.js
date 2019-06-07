/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';
import Home from "./src/features/main/Home";
import Login from "./src/features/login/Login";


const AppNavigator = createStackNavigator(
  {
  Login: 
  {
    screen: Login,

  },
  Home: 
  {
    screen: Home,
  },

    initialRouteName: "Login"
  });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}