import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

import DataSource from '../../offline-util';
import storage from '../../storage';

async function saveItem() {
  await storage.set('user', 'derek');
}

export default function My(props) {
  useEffect(() => {
    let url = `https://api.github.com/search/repositories?q=NodeJS`;

    new DataSource()
      .fetchData(url)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Offline storage check console</Text>
      <Button title="Save AsyncStorage" onPress={saveItem}></Button>
      <Button
        title="Get AsyncStorage"
        onPress={async () => Alert.alert(await storage.get('user'))}></Button>
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
