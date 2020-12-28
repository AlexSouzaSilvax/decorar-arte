import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Root } from "native-base";
import Routes from "./src/Routes.js";

export default function App() {
  return (
    <Root>
      <NavigationContainer>
        <StatusBar style="light" /> 
        <Routes />
      </NavigationContainer>
    </Root>
  );
}