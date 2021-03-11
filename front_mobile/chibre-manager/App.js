//Dépendance extérieure
import React, {useState, createContext} from 'react';

//Dépendance intérieure
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./src/screens/Home/HomeScreen";
import GameHistoryScreen from "./src/screens/GameHistoryScreen/GameHistoryScreen";
import CreateFirstTeam from "./src/screens/CreateFirstTeam/CreateFirstTeamScreen.js";
import CreateSecondTeamScreen from "./src/screens/CreateSecondTeam/CreateSecondTeamScreen";
import GameScreen from "./src/screens/Game/GameScreen";
import WhoStartScreen from "./src/screens/WhoStartScreen/WhoStartScreen";
import AnnouncesScreen from "./src/screens/AnnouncesSreen/AnnouncesScreen";
import AtoutsScreen from "./src/screens/AtoutsScreen/AtoutsScreen";
import GameOptionScreen from "./src/screens/GameOptionScreen/GameOptionScreen";
import InfoScreen from "./src/screens/InfoScreen/InfoScreen";

// Crée un context pour réutilisser tout les variables a l'intérieur dans d'autre vue
export const GameContext = createContext({
  team1: [],
  setTeam1: () => {
  },
  team2: [],
  setTeam2: () => {
  },
  pointsManche: 0,
  setPointsManche: () => {
  },
});

//Crée la fonction App
function App() {

  //useState
  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();
  const [pointsManche, setPointsManche] = React.useState(1);

  //Valeur du context
  const value = {team1, setTeam1, team2, setTeam2, pointsManche, setPointsManche}

  //Navigation
  const Stack = createStackNavigator();

  //Return
  return (
    <GameContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={() => ({
              title: "Bienvenue",
              headerTitleAlign: 'center'
            })}

          />
          <Stack.Screen
            name="CreateTeam1"
            component={CreateFirstTeam}
            options={() => ({
              title: "Crée votre première équipe",
              headerTitleAlign: 'center',
              headerLeft: null
            })}
          />
          <Stack.Screen
            name="CreateTeam2"
            component={CreateSecondTeamScreen}
            options={() => ({
              title: "Crée votre deuxième équipe",
              headerTitleAlign: 'center',
              headerLeft: null
            })}
          />
          <Stack.Screen
            name="WhoStart"
            component={WhoStartScreen}
            options={() => ({
              title: "Qui Choisies l'atout en premier ?",
              headerTitleAlign: 'center',
              headerLeft: null
            })}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={() => ({
              title: "Jeux",
              headerTitleAlign: 'center',
              headerLeft: null
            })}
          />
          <Stack.Screen
            name="Announces"
            component={AnnouncesScreen}
          />
          <Stack.Screen
            name="Atouts"
            component={AtoutsScreen}
          />
          <Stack.Screen
            name="Historical"
            component={GameHistoryScreen}
          />
          <Stack.Screen
            name="GameOption"
            component={GameOptionScreen}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameContext.Provider>
  )
}

export default App;
