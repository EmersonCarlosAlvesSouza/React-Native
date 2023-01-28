import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import PatrimonioCadastrado from './src/pages/PatrimonioCadastrado';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
