//Dépendance extérieure
import React, {useEffect, useState} from 'react'
import {View} from 'react-native'

//Dépendance intérieure
import GameHistory from "../../components/game-history";
import {indexGame} from "../../common/api";
import {styles} from "./style";

//Crée la fonction GameHistoryScreen
export default function GameHistoryScreen() {

  //useState
  const [gameData, setGameData] = useState(null)

  //Fonction qui permet d'avoir la liste des partie crée
  const getGame = async () => {
    const games = await indexGame()
    setGameData(games)
  }

  // UseEffect
  useEffect(() => {
    getGame();
  }, []);

  //Retourne la vue principale de la fonction
  return (
    <View>
      <GameHistory GameData={gameData}/>
    </View>
  )
}
