import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, useColorScheme, Text } from 'react-native';
import CharacterList from './screens/CharacterList';

export default function App() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.titleText}>Rick & Morty</Text>
      <CharacterList isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
   },
  titleText: {
    backgroundColor: '#1f1f1f',
    padding: 10,
    textAlign: 'center', 
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  }
});
