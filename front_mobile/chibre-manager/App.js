/**
 * The external dependencies
 */
import React, {useState, createContext} from 'react';

/**
 * The Internal dependencies
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/Home/HomeScreen";
import GameHistoryScreen from "./src/screens/GameHistoryScreen/GameHistoryScreen";
import CreateFirstTeam from "./src/screens/CreateFirstTeam/CreateFirstTeamScreen.js";
import CreateSecondTeamScreen from "./src/screens/CreateSecondTeam/CreateSecondTeamScreen";
import GameScreen from "./src/screens/Game/GameScreen";
import WhoStartScreen from "./src/screens/WhoStartScreen/WhoStartScreen";
import AnnouncesScreen from "./src/screens/AnnouncesSreen/AnnouncesScreen";



export   const GameContext = createContext({
  team1: [],
  setTeam1: () => {},
  team2: [],
  setTeam2: () => {},
  pointsManche: 0,
  setPointsManche: () => {},
});


export default function App() {
  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();
  const [pointsManche, setPointsManche] = React.useState(0);

  const value = {team1, setTeam1, team2, setTeam2, pointsManche, setPointsManche}




  const Stack = createStackNavigator();


  return (
    <GameContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator
          // screenOptions={{
          //   headerShown: false
          // }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CreateTeam1" component={CreateFirstTeam} />
          <Stack.Screen name="CreateTeam2" component={CreateSecondTeamScreen} />
          <Stack.Screen name="WhoStart" component={WhoStartScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Announces" component={AnnouncesScreen} />
          <Stack.Screen name="Historical" component={GameHistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameContext.Provider>
  )
}


