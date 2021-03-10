import React, {useEffect, useState} from 'react'

import {View, Text} from 'react-native'

import GameHistory from "../../components/game-history";
import {indexGame} from "../../common/api";

import {Button} from 'react-native-paper'


export default function GameHistoryScreen() {
  const [gameData, setGameData] = useState(null)

  useEffect(  () => {
    getGame();
  }, []);

  const getGame = async () => {
    const games = await indexGame()
    setGameData(games)
  }

  const test = async () => {
    console.log(gameData)
  }


  return (
    <View>
      <GameHistory GameData={gameData}/>
      <Button onPress={() => {test()}}> test</Button>
    </View>
  )
}
