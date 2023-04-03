import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/styles';
import { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text styles={StyleSheet.texto}>Olá mundo!!</Text>
      </View>
    );
  }
}