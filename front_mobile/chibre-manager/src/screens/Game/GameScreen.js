import React, {useEffect, useContext, useState} from 'react'
import {View, Text, Pressable, TextInput, Modal, Picker, Image, TouchableOpacity} from 'react-native'

import {styles} from "./style";

import {Colors, ActivityIndicator, RadioButton, Button} from 'react-native-paper';
import {GetGame, updateGame} from "../../common/api";
import TeamView from "../../components/team-view";

import {GameContext} from "../../../App";

import {useNavigation} from "@react-navigation/native";




export default function GameScreen({route}) {
  const navigation = useNavigation();

  const {game} = route.params;
  const [gameData, setGameData] = React.useState([]);

  const [announcesTeam1, setAnnouncesTeam1] = React.useState([]);
  const [pointsTeam1, setPointsTeam1] = React.useState(0);

  const [announcesTeam2, setAnnouncesTeam2] = React.useState([]);
  const [pointsTeam2, setPointsTeam2] = React.useState(0);

  const [distributor, setDistributor] = React.useState('');

  /*Changer valeur de oui par true*/
  const [selectedValue, setSelectedValue] = useState(false);

  const {pointsManche} = useContext(GameContext);

  let formData = new FormData();


const ShowAtout = () => {
  switch(gameData.atout) {
    case "trefle":
      return (
        <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/trefle.png')} />
      )
      break;

    case "carreaux":
      return (
        <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/carreaux.png')} />
      )
      break;

    case "spades":
      return (
        <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/spades.png')} />
      )
      break;

    case "hearth":
      return (
        <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/hearth.png')} />
      )
      break;

    default:
      return  (
      <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/question-sign.png')} />
    )

  }
}

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

 const updateStatusGame = async () => {
   formData.append('status', 'game_over');
   const updateGamelala = await updateGame(game.game.id, formData)
 }

  const getGameAPI = async (id) => {
    const DataGame = await GetGame(id)
    setGameData(DataGame)

    currentAnnouncesTeam1(DataGame);
    currentAnnouncesTeam2(DataGame);

    console.log(gameData)

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

  const test22 = () => {

    gameData.teams.forEach((team) => {
      team.player.forEach((player) => {
        if (player.distributor)
          setDistributor(player.name)
      })
    })
  }





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
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
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

    selectedValue
  }, );

  useEffect(   () => {

    getGameAPI(game.game.id);
  }, [game]);

  useEffect(  () => {
    calculatePoints();
  }, [selectedValue]);

  if (gameData.teams !== undefined) {


    if(gameData.winner) {
      if (gameData.teams[0].winner) {
        return (
          <View>
            <View>
              <Text>{gameData.teams[0].name} remporte la partie</Text>
            </View>
            <Button
              mode={"contained"}
              onPress={() => {{
                updateStatusGame();
                navigation.navigate("Home")
              }}}
            >Retour au menu</Button>
          </View>
        )
      }
      if (gameData.teams[1].winner) {
        return (
          <View>
            <View>
              <Text>{gameData.teams[1].name} remporte la partie</Text>
            </View>
              <Button
                mode={"contained"}
              >Retour au menu</Button>
          </View>
        )
      }
    }


    else {
      return (
        <View style={styles.container}>
          <View style={styles.containerButtons}>
            <TouchableOpacity onPress={() => {getGameAPI(game.game.id); test22();}}>
              <Image style={styles.img} source={require('../../../assets/img/refresh.png')}  />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {updateCurrentGame();}}>
              <Image style={styles.img} source={require('../../../assets/img/next.png')}  />
            </TouchableOpacity>
            <Text> Manche : {gameData.rounds}</Text>

          </View>



          <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Atouts', {
              game: gameData,
            })}>
              <View style={styles.card}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <Text>Atout de la manche: </Text>
                  <ShowAtout/>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.card}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text>Distributeur: {distributor} </Text>

              </View>
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
            atout={gameData.atout}
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
            atout={gameData.atout}
            clickable={false}
          />
        </View>
      )
    }

      }

  if (gameData.teams == undefined) {
    return (
      <View>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </View>
    )
  }




}
