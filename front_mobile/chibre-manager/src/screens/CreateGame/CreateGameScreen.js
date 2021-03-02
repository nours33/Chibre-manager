import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native";

import {styles} from './style'
import {Button, RadioButton, TextInput} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";


export default function CreateGameScreen() {
  const [playerOne, setPlayerOne] = React.useState('');
  const [playerTwo, setPlayerTwo] = React.useState('');
  const [team, setTeam] = React.useState('');

  const [checked, setChecked] = React.useState('first');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Creation des Teams</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img}  source={require('../../../assets/img/team.png')}/>
      </View>


      <View>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.inputText
            }
            label="Nom de l'équipe"
            value={team}
            onChangeText={team => setTeam(team)}
            mode={'outlined'}
          />
        </View>
        <View style={styles.inputTextContainer}>
          <View style={{ alignItems: 'center'}}>
            <TextInput
              style={styles.inputText
              }
              label="Joueur 1"
              value={playerOne}
              onChangeText={playerOne => setPlayerOne(playerOne)}
              mode={'outlined'}
            />
          </View>

          <View style={{ alignItems: 'center'}}>
            <TextInput
              style={styles.inputText
              }
              label="Joueur 2"
              value={playerTwo}
              onChangeText={playerTwo => setPlayerTwo(playerTwo)}
              mode={'outlined'}
            />
          </View>
        </View>
      </View>

      <View>
        <Button mode="contained" onPress={() => navigation.navigate('commencez la partie')} >Commencez la partie !</Button>
      </View>
    </View>
  )
}


