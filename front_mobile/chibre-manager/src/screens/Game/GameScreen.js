import React, {useEffect} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

import {styles} from "./style";

import { Card, Title, Paragraph, Colors, ActivityIndicator } from 'react-native-paper';
import {GetGame} from "../../common/api";
import TeamView from "../../components/team-view";





export default function GameScreen({route}) {
  const {game} = route.params;
  const [gameData, setGameData] = React.useState([]);


  const [teamOne, setTeamOne] = React.useState([]);
  const [teamTwo, setTeamTwo] = React.useState('');

  const [player1, setPlayer1] = React.useState('');
  const [Player2, setPlayer2] = React.useState('');


  const [test, setTest] = React.useState(0);




  const [teamOnePoints, setTeamOnePoints] = React.useState('');
  const [teamTwoPoints, setTeamTwoPoints] = React.useState('');


  const [roundPoints, setRoundPoints] = React.useState(0);



  const getGameAPI = async (id) => {
    const DataGame = await GetGame(id)
    setGameData(DataGame)
  };






  // const setParams = () => {
  //   if (gameData.teams !== undefined) {
  //     gameData.teams[0].name
  //     setTeamOne({
  //       ...teamOne,
  //       name: gameData.teams[0].name,
  //       point: gameData.teams[0].points,
  //     });
  //   }
  //   else {
  //     return null
  //   }
  // }



  useEffect(  () => {
    getGameAPI(game.game.id);
    // setParams();
  }, []);

  if (gameData.teams !== undefined) {




    return (
      <View style={styles.container}>
        <View style={styles.block}>

          <View style={styles.test}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Atout de la manche :</Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Qui a distribuer ? </Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>
        </View>


      <TeamView
        game={gameData}
        team={gameData.teams[0]}
        player1={gameData.teams[0].player[0]}
        player2={gameData.teams[0].player[1]}
      />


        <TeamView
          game={gameData}
          team={gameData.teams[1]}
          player1={gameData.teams[1].player[0]}
          player2={gameData.teams[1].player[1]}
        />
      </View>
    )
  }
  if (gameData.teams == undefined) {
    return (
      <View>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </View>

    )
  }
}
