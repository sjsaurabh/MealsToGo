import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../Feature/account/screens/account.screen";
import { LoginScreen } from "../../Feature/account/screens/login.screen";
import { RegisterScreen } from "../../Feature/account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerShown={false}>
    <Stack.Screen
      name="Main"
      component={AccountScreen}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
    />
  </Stack.Navigator>
);