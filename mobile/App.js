import React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./src/stacks/MainStack.js";

//import store from "./src/store/store";
//import { Provider } from "react-redux";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {/*<Provider store={store}></Provider>*/}
      <MainStack />
    </NavigationContainer>
  );
}