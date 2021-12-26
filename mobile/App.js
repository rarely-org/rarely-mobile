import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Icon from '@mdi/react';
// import { mdiPlaylistEdit } from '@mdi/js';

// console.log(mdiPlaylistEdit)

import Screen from "./components/Screen";
import DiscoverScreen from "./screens/DiscoverScreen";
import PostEditScreen from "./screens/PostEditScreen";

const Search = () => (
  <Screen><Text>Search</Text></Screen>
)

const MyPosts = () => (
  <Screen><Text>My posts</Text></Screen>
)

const Profile = () => (
  <Screen><Text>Profile</Text></Screen>
)

const theme = {
  colors: {
    background: '#eeeeee',
    border: '#333333',
  },
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator tabBarOptions={{
    showLabel: false,
    activeTintColor: "#2196f3",
    inactiveTintColor: "#333333"
  }}>
    <Tab.Screen name="Discover" component={DiscoverScreen} options={{
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="creation" color={color} size={size} />)
    }}/>
    <Tab.Screen name="Search" component={Search} options={{
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="magnify" color={color} size={size} />)
    }}/>
    <Tab.Screen name="Add" component={PostEditScreen} options={{
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="plus-circle" color={color} size={size} />)
    }}/>
    <Tab.Screen name="MyPosts" component={MyPosts} options={{
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="format-list-bulleted-square" color={color} size={size} />)
    }}/>
    <Tab.Screen name="Profile" component={Profile} options={{
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />)
    }}/>
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer theme={theme} >
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
