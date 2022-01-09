import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverScreen from "../screens/DiscoverScreen";
import ProductPostsScreen from "../screens/ProductPostsScreen";
import CategoryPostsScreen from "../screens/CategoryPostsScreen";

const Stack = createStackNavigator();

const DiscoverNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Discover" component={DiscoverScreen} />
    <Stack.Screen name="Product" component={ProductPostsScreen} options={({ route }) => ({ title: route.params.name })}/>
    <Stack.Screen name="Category" component={CategoryPostsScreen} options={({ route }) => ({ title: route.params.name })}/>
  </Stack.Navigator>
);

export default DiscoverNavigator;
