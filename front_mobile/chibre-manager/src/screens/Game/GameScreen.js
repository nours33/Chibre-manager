import React from 'react'
import {View, Text} from 'react-native'

import {styles} from './style'

import { Card, Title, Paragraph } from 'react-native-paper';


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
      <View>
        <TeamView
          player1={gameData.teams[0].player[0]}
          player2={gameData.teams[0].player[1]}
        />
      </View>
    )
  }
  if (gameData.teams == undefined) {
    return (
      <View>
        <ActivityIndicator animating={true} color={Colors.red800} />
>>>>>>> Stashed changes
      </View>




    </View>
  )

}
