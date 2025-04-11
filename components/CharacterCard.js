import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CharacterCard({ character, isDarkMode }) {
  const backgroundColor = isDarkMode ? '#1f1f1f' : '#f0f0f0';
  const textColor = isDarkMode ? '#fff' : '#000';
  const subTextColor = isDarkMode ? '#ccc' : '#555';

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.name, { color: textColor }]}>{character.name}</Text>
        <Text style={[styles.status, { color: subTextColor }]}>
          {character.status} - {character.species}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
  },
});
