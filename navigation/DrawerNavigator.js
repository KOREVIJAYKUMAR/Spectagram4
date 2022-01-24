import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />

        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  }
}