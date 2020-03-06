import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home(props) {
  const character = {
    name: 'Derek Wang',
    home: 'Shanghai',
    species: 'basketball player',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>首页</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => props.navigation.navigate('My', {item: character})}>
        <Text style={styles.buttonText}>Go to My Screen</Text>
        <Text style={styles.buttonText}>Who is {character.name}?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
