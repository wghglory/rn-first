import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Message from './Message';
import My from './My';
import Welcome from './Welcome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigator({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: {color: 'white'},
          headerStyle: {backgroundColor: 'rgb(29,216,200)'},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}></Tab.Screen>
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            title: 'Message',
          }}></Tab.Screen>
        <Tab.Screen
          name="My"
          component={My}
          options={{
            title: 'My',
          }}></Tab.Screen>
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
