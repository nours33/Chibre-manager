//Dépendance extérieure
import React, {useContext} from 'react';

//Dépendance intérieure
import {styles} from "./style";
import {Text, View} from "react-native";
import {RadioButton} from "react-native-paper";
import {GameContext} from "../../../App";

//Crée la fonction WhoStarted
export default function WhoStarted(props) {

  //Context
  const {team1, team2} = useContext(GameContext);

  //Retourne toute la vue principale de la fonction
  return (
    <View style={styles.container}>
      <View style={styles.containerTeam}>
        <Text style={styles.teamName}>
          {team1.team1}
        </Text>
        <View style={styles.containerPlayers}>
          <View style={styles.containerPlayer}>
            <Text>
              {team1.player1}
            </Text>
            <RadioButton
              value="first"
              status={props.checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => props.callback('first')}
            />
          </View>
          <View style={styles.containerPlayer}>
            <Text>
              {team1.player2}
            </Text>
            <RadioButton
              value="second"
              status={props.checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => props.callback('second')}
            />
          </View>
        </View>
      </View>
      <View style={styles.containerTeam}>
        <Text style={styles.teamName}>
          {team2.team2}
        </Text>
        <View style={styles.containerPlayers}>
          <View style={styles.containerPlayer}>
            <Text>
              {team2.player3}
            </Text>
            <RadioButton
              value="third"
              status={props.checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => props.callback('third')}
            />
          </View>
          <View style={styles.containerPlayer}>
            <Text>
              {team2.player4}
            </Text>
            <RadioButton
              value="fourth"
              status={props.checked === 'fourth' ? 'checked' : 'unchecked'}
              onPress={() => props.callback('fourth')}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
