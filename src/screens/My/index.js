import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function My(props) {
  const {route} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Screen</Text>

      {route.params?.item && (
        <View style={styles.card}>
          <Text style={styles.cardText}>Name: {route.params?.item.name}</Text>
          <Text style={styles.cardText}>
            Home Planet: {route.params?.item.home}
          </Text>
          <Text style={styles.cardText}>
            Species: {route.params?.item.species}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#101010',
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 5,
  },
});
