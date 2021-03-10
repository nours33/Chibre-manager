/**
 * Dépendance extérieure
 */
import React, {useContext, useEffect, useState} from 'react'
import {View, Text, Picker} from 'react-native'

/**
 * Dépendance intérieure
 */
import {GameContext} from "../../../App";
import { RadioButton, Button } from 'react-native-paper';
import WhoStarted from "../../components/who-started";
import {createGame} from "../../common/api";
import {useNavigation} from "@react-navigation/native";
import {styles} from './style'

//Crée la fonction WhoStartScreen
export default function WhoStartScreen() {

  //Navigation
  const navigation = useNavigation();

  //useState
  const { team1, setTeam1, team2 } = useContext(GameContext);
  const [checked, setChecked] = React.useState('first');
  const [data, setData] = React.useState([]);
  const [selectedValue, setSelectedValue] = useState('1000');

  //FormData
  let formData = new FormData();

  //Information envoyer à setData
  const dataGame = () => {
    formData.append('team_name1', team1.team1);
    formData.append('team_name2', team2.team2);
    formData.append('player1', team1.player1);
    formData.append('player2', team1.player2);
    formData.append('player3', team2.player3);
    formData.append('player4', team2.player4);
    formData.append('game_points', selectedValue);
    formData.append('first_to_play', checked);

    setData(formData)
  }

  //Crée la partie courante en envoyer les informations à createGame et change d'écran
  const createCurrentGame = async () => {
    const game = await createGame(data)
    navigation.navigate('Game', {
      game: game
    })
  };

 //useEffect
  useEffect(  () => {
    dataGame();
  }, [checked,selectedValue]);

  //Return
  return (
    <View style={styles.container}>

    <View>
      <Text style={styles.title}> Combien de points ?</Text>
      <View>
        <Picker
          mode={"dropdown"}
          selectedValue={selectedValue}
          style={{ height: 50, width: 150, color: 'black' }}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="1000 points" value={1000} />
          <Picker.Item label="1500 points" value={1500} />
        </Picker>
      </View>
    </View>
      <View>
        <Button
          mode="outlined"
          onPress={() => {
            createCurrentGame();
          }}
        >
        Commencez la partie !
        </Button>
      </View>
    </View>
  )
}
