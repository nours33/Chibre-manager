import React, {useContext} from 'react'
import {View} from "react-native";

import {styles} from './style'

import CreateTeam from "../../components/create-team";
import {GameContext} from "../../../App";




export default function CreateFirstTeamScreen({route}) {

  const { teams, setTeams } = useContext(GameContext);



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


