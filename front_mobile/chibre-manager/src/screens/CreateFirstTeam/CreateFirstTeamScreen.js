/**
 * Dépendance extérieure
 */
import React, {useContext} from 'react'
import {View} from "react-native";

/**
 * Dépendance intérieure
 */
import {styles} from './style'
import CreateTeam from "../../components/create-team";

//Crée la fonction CreateFirstTeamScreen
export default function CreateFirstTeamScreen() {
  return (
    <View style={styles.container}>
      <CreateTeam
        title="Equipe 1"
        icone={require('../../../assets/img/team.png')}
        namePlayerOne="Joueur 1"
        namePlayerTwo="Joueur 2"
        routeNavigation="CreateTeam2"
        currentScreen="Team1"
      />
    </View>
  )
}
