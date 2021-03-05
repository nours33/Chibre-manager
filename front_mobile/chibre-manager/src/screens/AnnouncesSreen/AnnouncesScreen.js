import React from 'react'

import {View, Text, TouchableOpacity, Image} from 'react-native'
import {Card, Paragraph, Title} from "react-native-paper";


import {styles} from "./style";

import Announces from "../../components/announces";
export default function AnnouncesScreen({route}) {


  const {playerid, gameid, teamid, gameRound } = route.params;


  return (
    <View style={styles.container}>


     <Announces
        name={"3 cartes"}
        points={20}
        playerid={playerid}
        gameid={gameid}
        teamid={teamid}
        gameRound={gameRound}

      />

      <Announces
        name={"4 cartes"}
        points={50}
        playerid={playerid}
        gameid={gameid}
        teamid={teamid}
        gameRound={gameRound}
      />

      <Announces
        name={"5 cartes"}
        points={100}
        playerid={playerid}
        gameid={gameid}
        teamid={teamid}
        gameRound={gameRound}
      />

      <Announces
        name={"Carré (10/Dame/Roi/As)"}
        points={100}
        playerid={playerid}
        gameid={gameid}
        teamid={teamid}
        gameRound={gameRound}
      />

      <Announces
        name={"Carré (9)"}
        points={150}
        playerid={playerid}
        gameid={gameid}
        teamid={teamid}
        gameRound={gameRound}
      />

      <Announces
        name={"Carré (Valet)"}
        points={200}
        playerid={playerid}
        gameid={gameid}
        teamid={teamid}
        gameRound={gameRound}
      />

      <Announces
        name={"Mit Stöck"}
        points={20}
        playerid={playerid}
        gameid={gameid}
        teamid={teamid}
        gameRound={gameRound}
      />


    </View>
  )
}
