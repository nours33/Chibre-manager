import React, {useContext, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {GameContext} from "../../../App";
import { RadioButton, Button } from 'react-native-paper';

import {CreateGame} from "../../common/api";
import {useNavigation} from "@react-navigation/native";

import {styles} from './style'


export default function WhoStartScreen() {
  const navigation = useNavigation();

  const { team1, setTeam1, team2 } = useContext(GameContext);

  const [checked, setChecked] = React.useState('first');
  const [data, setData] = React.useState([]);

  let formData = new FormData();

  const dataGame = () => {
    formData.append('team_name1', team1.team1);
    formData.append('team_name2', team2.team2);

    formData.append('player1', team1.player1);
    formData.append('player2', team1.player2);
    formData.append('player3', team2.player3);
    formData.append('player4', team2.player4);

    formData.append('first_to_play', checked);


    setData(formData)
  }

  const test2 = async () => {


    const test = await CreateGame(data)

    navigation.navigate('Game', {
      game: test
    })

  };


  useEffect(  () => {
    dataGame();
  }, [checked]);

  return (
    <View style={styles.container}>
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

      <View>
        <Text style={styles.teamName}>{team2.team2}</Text>
        <View style={styles.containerTeam}>
          <View style={styles.containerPlayer}>
            <Text>
              {team2.player3}
            </Text>
            <RadioButton
              value="third"
              status={ checked === 'third' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('third')}
            />
          </View>
          <View style={styles.containerPlayer}>
            <Text>
              {team2.player4}
            </Text>
            <RadioButton
              value="fourth"
              status={ checked === 'fourth' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('fourth')}
            />
          </View>
        </View>
      </View>
      <View>
        <Button
          mode="outlined"
          onPress={() => {
            test2();
          }}
        >
        Commencez la partie !
        </Button>

      </View>
    </View>



  )
}
