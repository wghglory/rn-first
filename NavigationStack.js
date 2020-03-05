import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';
import ThirdScreen from './Screens/ThirdScreen';

const Stack = createStackNavigator();

export default class NavigationStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: '首页',
              headerBackTitle: '自定义返回标题',
              headerStyle: {
                backgroundColor: 'green',
              },
            }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              headerTitle: 'Detail',
              title: 'My Detail Fallback',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Third"
            component={ThirdScreen}
            options={{
              headerTitle: 'Third',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
