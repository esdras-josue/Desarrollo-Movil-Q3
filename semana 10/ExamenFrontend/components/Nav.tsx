import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home';

export default function Nav() {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}