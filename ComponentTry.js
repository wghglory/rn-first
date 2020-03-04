import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
  Image,
  ActivityIndicator,
  TextInput,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import {WebView} from 'react-native-webview';

const {height, width} = Dimensions.get('window');

export default class ComponentTry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containers}>
          {/* --------------------TouchableWithoutFeedback-------------------- */}
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('onPress');
            }}
            onPressIn={() => {
              console.log('onPressIn');
            }}
            onPressOut={() => {
              console.log('onPressOut');
            }}
            // onLongPress={() => {
            //   console.log('onLongPress');
            // }}
          >
            <View style={styles.button}>
              <Text>你点我啊</Text>
            </View>
          </TouchableWithoutFeedback>

          {/* --------------------TouchableHighlight-------------------- */}
          <TouchableHighlight
            underlayColor="red"
            activeOpacity={0.1}
            onPress={() => {
              console.log('onPress');
            }}>
            <Text>点击按钮</Text>
          </TouchableHighlight>

          {/* --------------------TouchableOpacity-------------------- */}
          <TouchableOpacity
            // activeOpacity
            onPress={() => {
              // console.log('onPress');
              Alert.alert('点击了');
            }}>
            <Text>点击按钮</Text>
          </TouchableOpacity>

          {/* --------------------Button-------------------- */}
          <Button
            title={'点击我啊'}
            color={'red'}
            onPress={() => {
              // Alert.alert('点击了');
              this.setState({animating: !this.state.animating});
            }}
          />

          {/* --------------------ActivityIndicator-------------------- */}
          <ActivityIndicator
            size="large"
            color="red"
            animating={this.state.animating}
          />

          {/* --------------------Image-------------------- */}
          <Image source={require('./imgs/log.jpg')} />

          <Image
            style={{width: 50, height: 50}}
            source={{
              uri:
                'https://facebook.github.io/react-native/docs/assets/favicon.png',
            }}
          />

          {/* --------------------TextInput-------------------- */}
          <TextInput
            style={styles.textInput}
            // value={'哈哈'}
            placeholder={'请输入六位数的密码'}
            // placeholderTextColor={'red'}
            // secureTextEntry={true}
            // keyboardType={'name-phone-pad'}
            clearButtonMode={'while-editing'}
            // onChangeText={(text)=>{
            //   console.log(text);
            // }}
            onSubmitEditing={event => {
              // console.log(event);
              const {
                nativeEvent: {text},
              } = event;
              console.log(text);
            }}
          />

          <WebView source={{uri: 'https://github.com/facebook/react-native'}} />

          <View
            style={{width, height: 90, marginTop: 30, backgroundColor: 'red'}}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  button: {
    width: 80,
    height: 50,
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginHorizontal: 20,
    marginTop: 80,
    height: 30,
    borderWidth: 1,
    borderColor: '#7fff00',
    fontSize: 19,
  },
});
