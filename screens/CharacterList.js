import React, { useEffect, useState } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
} from 'react-native';
import CharacterCard from '../components/CharacterCard';

export default function CharacterList({ isDarkMode }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al obtener los personajes:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = characters.filter(char =>
      char.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [searchText]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={isDarkMode ? '#00ffcc' : '#00aaff'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar personaje..."
        placeholderTextColor={isDarkMode ? '#999' : '#666'}
        style={[
          styles.input,
          {
            backgroundColor: isDarkMode ? '#1f1f1f' : '#eee',
            color: isDarkMode ? '#fff' : '#000',
          },
        ]}
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredCharacters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} isDarkMode={isDarkMode} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});
