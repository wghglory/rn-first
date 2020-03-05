import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Message extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>消息</Text>
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
