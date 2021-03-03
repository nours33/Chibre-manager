import React, {useContext} from 'react'
import {View} from "react-native";

import {styles} from './style'
import {GameContext} from "../../../App";


import CreateTeam from "../../components/create-team";


export default function CreateSecondTeam({route}) {
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


