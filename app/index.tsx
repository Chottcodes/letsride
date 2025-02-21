import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
   
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}  
        />
      </Stack.Navigator>
    
  );
}
