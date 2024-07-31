import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import home from "@/src/app/home/home";
import User from "@/src/app/user/user";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };