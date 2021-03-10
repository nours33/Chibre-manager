/**
 * Dépendance extérieure
 */
import React from 'react';
import {View} from "react-native";

/**
 * Dépendance intérieure
 */
import {styles} from './style'
import CreateTeam from "../../components/create-team";

//Crée la fonction CreateSecondTeam
export default function CreateSecondTeam() {
  return (
    <View style={styles.container}>
      <CreateTeam
        title="Equipe 2"
        icone={require('../../../assets/img/team.png')}
        namePlayerOne="Joueur 3"
        namePlayerTwo="Joueur 4"
        routeNavigation="WhoStart"
      />
    </View>
  )
}


