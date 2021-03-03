/**
 * The external dependencies
 */
import React from 'react';

/**
 * The Internal dependencies
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/Home/HomeScreen";
import CreateFirstTeam from "./src/screens/CreateFirstTeam/CreateFirstTeamScreen.js";
import CreateSecondTeamScreen from "./src/screens/CreateSecondTeam/CreateSecondTeamScreen";
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
        <Stack.Screen name="CreateTeam1" component={CreateFirstTeam} />
        <Stack.Screen name="CreateTeam2" component={CreateSecondTeamScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


