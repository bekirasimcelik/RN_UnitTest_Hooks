import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PersonCard from './src/components/PersonCard';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PersonCard />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
