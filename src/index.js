import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Company from './Company';
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
        tabBarOptions={{
          // showLabel: false 是否显示文字
          activeTintColor: 'rgb(29,216,200)',
          inactiveTintColor: 'gray',
        }}
        screenOptions={({route}) => ({
          headerTitleStyle: {color: 'white'},
          headerStyle: {backgroundColor: 'rgb(29,216,200)'},
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'globe';
            } else if (route.name === 'Company') {
              iconName = 'building-o';
            } else if (route.name === 'Message') {
              iconName = 'comments-o';
            } else if (route.name === 'My') {
              iconName = 'user-circle-o';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}></Tab.Screen>
        <Tab.Screen
          name="Company"
          component={Company}
          options={{
            title: 'Company',
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
