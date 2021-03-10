//Dépendance extérieure
import React, {useContext, useEffect, useState} from 'react'
import {View} from 'react-native'

//Dépendance intérieure
import {GameContext} from "../../../App";
import {Button} from 'react-native-paper';
import WhoStarted from "../../components/who-started";
import PickerCustom from "../../components/picker";
import {createGame} from "../../common/api";
import {useNavigation} from "@react-navigation/native";
import {styles} from './style'

//Crée la fonction WhoStartScreen
export default function WhoStartScreen() {

  //Navigation
  const navigation = useNavigation();

  //useState
  const [checked, setChecked] = React.useState('first');
  const [data, setData] = React.useState([]);
  const [selectedValue, setSelectedValue] = useState('1000');

  //Context
  const {team1, team2} = useContext(GameContext);

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
  useEffect(() => {
    dataGame();
  }, [checked, selectedValue]);

  //Return
  return (
    <View style={styles.container}>
      <View>
        <WhoStarted
          callback={setChecked}
          checked={checked}
        />
      </View>
      <PickerCustom
        callback={setSelectedValue}
        selectedValue={selectedValue}
      />
      <View>
        <Button
          mode="contained"
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
