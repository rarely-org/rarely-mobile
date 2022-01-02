import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverScreen from "../screens/DiscoverScreen";
import ProductPostsScreen from "../screens/ProductPostsScreen";

const Stack = createStackNavigator();

const DiscoverNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Discover" component={DiscoverScreen} />
    <Stack.Screen name="Product" component={ProductPostsScreen} />
  </Stack.Navigator>
);

export default DiscoverNavigator;