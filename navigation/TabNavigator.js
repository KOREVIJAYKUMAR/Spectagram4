import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen labeled={false}
          name="Feed"
          component={Feed}
       />

        <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
    );
  }
}
