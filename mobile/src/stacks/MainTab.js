import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconAntDesign from "react-native-vector-icons/AntDesign";
const TabBar = createBottomTabNavigator();

import Home from "../screens/Home";

export default function MainTab() {

  return (
    <TabBar.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "calendar";
              break;
            default:
              iconName = "calendar";
              break;
          }

          return <IconAntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#Fefefe",
          borderTopColor: "#Fefefe",
        },
        activeBackgroundColor: "#Fefefe",
        inactiveBackgroundColor: "#Fefefe",
        activeTintColor: "#ed0059",
        //inactiveTintColor: colors.cinzaClaro2,
        showLabel: false,
      }}
    >
      <TabBar.Screen name="Home" component={Home} />
      {/*<TabBar.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ tabBarBadge: qtdFilmesFavoritos }}
      />*/}
    </TabBar.Navigator>
  );
}