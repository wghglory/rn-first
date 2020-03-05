import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#eee', flex: 1}}>
        <Button
          title="跳转到详情页"
          onPress={() => {
            console.log(this.props);
            this.props.navigation.navigate('Detail', {
              userName: '我是首页',
              userInfo: '这是信息',
              title: '首页给的标题',
            });
          }}
        />
      </View>
    );
  }
}
