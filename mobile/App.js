import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen from "./components/Screen";
import DiscoverScreen from "./screens/DiscoverScreen";
import PostEditScreen from "./screens/PostEditScreen";

const Search = () => (
  <Screen><Text>Search</Text></Screen>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Discover" component={DiscoverScreen} />
    <Tab.Screen name="Add" component={PostEditScreen} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
