import React, {useEffect, useState} from 'react'

import {View, Text, FlatList} from 'react-native'

import GameHistory from "../../components/game-history";
import {GetGame} from "../../common/api";


export default function GameHistoryScreen() {
  const [gameData, setGameData] = useState(null)

  useEffect(  () => {
    getGame();
  }, []);

  const getGame = async () => {
    const games = await GetGame()
    setGameData(games)
  }
  console.log(gameData)
  return (
    <View>
      <GameHistory GameData={gameData}/>
    </View>
  )
}
