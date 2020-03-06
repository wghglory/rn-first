import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';

const Stack = createStackNavigator();

export default function Company() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {color: 'white'},
        headerStyle: {backgroundColor: 'rgb(29,216,200)'},
      }}>
      <Stack.Screen name="CompanyList" component={CompanyList}></Stack.Screen>
      <Stack.Screen
        name="CompanyDetail"
        component={CompanyDetail}></Stack.Screen>
    </Stack.Navigator>
  );
}
