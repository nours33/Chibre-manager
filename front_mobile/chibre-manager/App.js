import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from "./src/screens/Home/HomeScreen";
import CreateGameScreen from "./src/screens/CreateGame/CreateGameScreen";
import GameScreen from "./src/screens/Game/GameScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Création de la partie" component={CreateGameScreen} />
        <Stack.Screen name="commencez la partie" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


