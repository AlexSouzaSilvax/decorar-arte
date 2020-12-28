import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "../screens/Login";
import Home from "../screens/Home";
import DetalheHome from "../screens/DetalheHome";
import MainTab from "../stacks/MainTab";

export default () => (
  <Stack.Navigator
    screenOptions={{
      inititalRouteName: "Login",
      headerShown: false,      
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="DetalheHome" component={DetalheHome} />
    {/*<Stack.Screen name="MainTab" component={MainTab} />*/}
  </Stack.Navigator>
);