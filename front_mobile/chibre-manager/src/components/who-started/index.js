/**
 * Dépendance extérieure
 */
import React from 'react';

/**
 * Dépendance intérieure
 */

import {styles} from "./style";
import {Text, View} from "react-native";
import {RadioButton} from "react-native-paper";


export default function WhoStarted(props) {

  return(
    <View>
      <Text style={styles.teamName}>{team1.team1}</Text>
      <View style={styles.containerTeam}>
        <View style={styles.containerPlayer}>
          <Text>
            {team1.player1}
          </Text>
          <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
        </View>
        <View style={styles.containerPlayer}>
          <Text>
            {team1.player2}
          </Text>
          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
        </View>
      </View>
    </View>
  )
}
