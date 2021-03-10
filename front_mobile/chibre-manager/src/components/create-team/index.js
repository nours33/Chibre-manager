/**
 * The external dependencies
 */
import React, {useState, useEffect, useContext} from 'react';
import {Image, Text, View} from "react-native";

/**
 * The Internal dependencies
 */
import {styles} from "./style";
import {Button, TextInput} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {GameContext} from "../../../App";

const CreateTeam = (props) => {
  const { team1, setTeam1, team2, setTeam2 } = useContext(GameContext);



  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  const [team, setTeam] = useState('');



  const navigation = useNavigation();



  const test = () => {

    if (props.currentScreen == 'Team1') {
      setTeam1({...team1, team1: team, player1: playerOne, player2: playerTwo});
    }
    else {
      setTeam2({...team2, team2: team, player3: playerOne, player4: playerTwo});
    }

    if (playerOne !== '' && playerTwo !== '' && team !== '')
    navigation.navigate(props.routeNavigation);
  }


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        <Image style={styles.img}  source={props.icone}/>
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
              label={props.namePlayerOne}
              value={playerOne}
              onChangeText={playerOne => setPlayerOne(playerOne)}
              mode={'outlined'}
            />
          </View>
          <View style={{ alignItems: 'center'}}>
            <TextInput
              style={styles.inputText
              }
              label={props.namePlayerTwo}
              value={playerTwo}
              onChangeText={playerTwo => setPlayerTwo(playerTwo)}
              mode={'outlined'}
            />
          </View>
        </View>
      </View>
      <View>
        <Button mode="contained" onPress={() => test()} >Suivant</Button>
      </View>
      <View>
      </View>
    </View>
  )
};

export default CreateTeam;
