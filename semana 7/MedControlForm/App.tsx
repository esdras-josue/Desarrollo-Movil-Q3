import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormMedControl from './components/FormMedControl';


export default function App() {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(FormMedControl),
    React.createElement(StatusBar, { style: 'auto' }),
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
