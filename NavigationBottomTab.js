import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './TabScreen/Home';
import Message from './TabScreen/Message';
import Personal from './TabScreen/Personal';

const Tab = createBottomTabNavigator();

export default class NavigationBottomTab extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Message">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: '首页',
              headerBackTitle: '自定义返回标题',
              headerStyle: {
                backgroundColor: 'green',
              },
            }}
          />
          <Tab.Screen
            name="Message"
            component={Message}
            options={{
              headerTitle: 'Message',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Tab.Screen
            name="Personal"
            component={Personal}
            options={{
              headerTitle: 'Personal',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
