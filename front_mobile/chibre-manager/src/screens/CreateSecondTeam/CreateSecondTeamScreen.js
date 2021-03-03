import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native";

import {styles} from './style'
import {Button, RadioButton, TextInput} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

import CreateTeam from "../../components/create-team";


export default function CreateSecondTeam() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CreateTeam
        title="Equipe 2"
        icone={require('../../../assets/img/team.png')}
        namePlayerOne="Joueur 3"
        namePlayerTwo="Joueur 4"
      />
      <View>
        <Button mode="contained" onPress={() => navigation.navigate('Game')} >Suivant</Button>
      </View>
    </View>

  )
}


