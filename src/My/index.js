import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class My extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>我的</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
