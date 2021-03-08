import React, {useEffect, useContext, useState} from 'react'
import {View, Text, Pressable, TextInput, Modal, Picker} from 'react-native'

import {styles} from "./style";

import { Colors, ActivityIndicator, RadioButton} from 'react-native-paper';
import {GetGame, updateGame} from "../../common/api";
import TeamView from "../../components/team-view";

import {GameContext} from "../../../App";





export default function GameScreen({route}) {

  const {game} = route.params;
  const [gameData, setGameData] = React.useState([]);

  const [announcesTeam1, setAnnouncesTeam1] = React.useState([]);
  const [pointsTeam1, setPointsTeam1] = React.useState(0);

  const [announcesTeam2, setAnnouncesTeam2] = React.useState([]);
  const [pointsTeam2, setPointsTeam2] = React.useState(0);

  /*Changer valeur de oui par true*/
  const [selectedValue, setSelectedValue] = useState('oui');

  const {pointsManche} = useContext(GameContext);

  let formData = new FormData();

 const updateCurrentGame = async () => {

   formData.append('points_manche', pointsManche);
   formData.append('match', selectedValue);

   announcesTeam1.forEach((announcesPoints, index) => {
     formData.append(`team1_num${index}_announce`, announcesPoints.points)
   })

   announcesTeam2.forEach((announcesPoints, index) => {
     formData.append(`team2_num${index}_announce`, announcesPoints.points)
   })
   const updateGamelala = await updateGame(game.game.id, formData)

 }

  const getGameAPI = async (id) => {
    const DataGame = await GetGame(id)
    setGameData(DataGame)

    currentAnnouncesTeam1(DataGame);
    currentAnnouncesTeam2(DataGame);

  };

  const currentAnnouncesTeam2 = (data) =>  {
    const announces = [];
    setPointsTeam2(data.teams[1].points)
    data.teams[1].player.forEach((player) => {
      player.announce.forEach((announce) => {
        if (data.rounds == announce.rounds) {
          announces.push(announce)
        }
      })
    })
    setAnnouncesTeam2(announces);
  };

  const currentAnnouncesTeam1 = (data) =>  {
    const announces = [];
      setPointsTeam1(data.teams[0].points)
      data.teams[0].player.forEach((player) => {
        player.announce.forEach((announce) => {
          if (data.rounds == announce.rounds) {
            announces.push(announce)
          }
        })
      })
    setAnnouncesTeam1(announces);
  };

  const calculatePoints = (points) => {
    if (157 - points <= 0) {
      return  0
    }
    if (points == 0) {
      return (
        <View style={{flex: 1}}>
          <Text style={{color: 'white'}}>matche ?</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 100, color: 'white' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="oui" value={true} />
            <Picker.Item label="non" value={false} />
          </Picker>
          <Text>{selectedValue ? 257 : 157}</Text>
        </View>
      )
    }
    else {
      return 157 - points
    }
  }

  useEffect(   () => {
    getGameAPI(game.game.id);
  }, [announcesTeam1]);

  useEffect(  () => {
    calculatePoints();
  }, [selectedValue]);

  if (gameData.teams !== undefined) {
    return (
      <View style={styles.container}>
        {/*<Pressable onPress={() => {currentAnnouncesTeam1(); currentAnnouncesTeam2()}}>*/}
        {/*  <Text>Refresh</Text>*/}
        {/*</Pressable>*/}

        <Pressable onPress={() => {updateCurrentGame();}}>
          <Text>manche suivante</Text>
        </Pressable>

        <Text> manche : {gameData.rounds}</Text>

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
        clickable={true}
      />


        <TeamView
          game={gameData}
          team={gameData.teams[1]}
          player1={gameData.teams[1].player[0]}
          player2={gameData.teams[1].player[1]}
          announcesTeam={announcesTeam2}
          pointsTotal={pointsTeam2}
          pointsManche={calculatePoints(pointsManche)}
          clickable={false}
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
