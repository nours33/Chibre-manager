import React, {useEffect, useContext} from 'react'
import {View, Text, Pressable} from 'react-native'

import {styles} from "./style";

import { Card, Title, Paragraph, Colors, ActivityIndicator } from 'react-native-paper';
import {GetGame} from "../../common/api";
import TeamView from "../../components/team-view";

import {GameContext} from "../../../App";





export default function GameScreen({route}) {
  const {game} = route.params;
  const [gameData, setGameData] = React.useState([]);



  const [announcesTeam1, setAnnouncesTeam1] = React.useState([]);
  const [pointsTeam1, setPointsTeam1] = React.useState([]);


  const [announcesTeam2, setAnnouncesTeam2] = React.useState([]);
  const [pointsTeam2, setPointsTeam2] = React.useState([]);






  const {pointsManche} = useContext(GameContext);

  const getGameAPI = async (id) => {
    const DataGame = await GetGame(id)
    setGameData(DataGame)

  };

  const currentAnnouncesTeam2 = () =>  {
    const announces = [];
    setPointsTeam2(gameData.teams[1].points)
    gameData.teams[1].player.forEach((player) => {
      player.announce.forEach((announce) => {
        if (gameData.rounds == announce.rounds) {
          announces.push(announce)
        }
      })
    })
    setAnnouncesTeam2(announces);
  };

  const currentAnnouncesTeam1 = () =>  {
    const announces = [];
    setPointsTeam1(gameData.teams[1].points)
    gameData.teams[0].player.forEach((player) => {
      player.announce.forEach((announce) => {
        if (gameData.rounds == announce.rounds) {
          announces.push(announce)
        }
      })
    })
    setAnnouncesTeam1(announces);

  };


  useEffect(  () => {
    getGameAPI(game.game.id);
  }, [announcesTeam1]);




  if (gameData.teams !== undefined) {


    return (
      <View style={styles.container}>
        <Pressable onPress={() => {currentAnnouncesTeam1(); currentAnnouncesTeam2()}}>
          <Text>Refresh</Text>
        </Pressable>

        <Pressable onPress={() => {}}>
          <Text>manche suivante</Text>
        </Pressable>


        <View style={styles.cardContainer}>
          <View style={styles.card}>
          <Text>Atout de la manche: </Text>
          </View>
          <View style={styles.card}>
            <Text>Distributeur ?: </Text>
          </View>
        </View>


      <TeamView
        game={gameData}
        team={gameData.teams[0]}
        player1={gameData.teams[0].player[0]}
        player2={gameData.teams[0].player[1]}
        announcesTeam={announcesTeam1}
        pointsTotal={pointsTeam1}
        pointsManche={pointsManche}
      />


        <TeamView
          game={gameData}
          team={gameData.teams[1]}
          player1={gameData.teams[1].player[0]}
          player2={gameData.teams[1].player[1]}
          announcesTeam={announcesTeam2}
          pointsTotal={pointsTeam2}
          pointsManche={157 - pointsManche <= 0 ? 0 : 157 - pointsManche}
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
