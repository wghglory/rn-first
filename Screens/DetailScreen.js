import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'yellow', flex: 1}}>
        <Button
          title="go to third"
          onPress={() => {
            this.props.navigation.navigate('Third');
          }}
        />
      </View>
    );
  }
}
