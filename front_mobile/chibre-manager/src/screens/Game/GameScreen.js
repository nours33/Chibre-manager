<<<<<<< HEAD
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

=======
//Dépendance extérieure
import React, {useEffect, useContext, useState} from 'react'
import {View, Text, Picker, Image, TouchableOpacity} from 'react-native'

//Dépendance intérieure
import {styles} from "./style";
import {GameContext} from "../../../App";
import {Colors, ActivityIndicator, Button} from 'react-native-paper';
import {GetGame, updateGame} from "../../common/api";
import TeamView from "../../components/team-view";
import {useNavigation} from "@react-navigation/native";

//Crée la fonction GameScreen
export default function GameScreen({route}) {

  //Navigation
  const navigation = useNavigation();

  //Route
  const {game} = route.params;

  //useState
  const [gameData, setGameData] = React.useState([]);
  const [announcesTeam1, setAnnouncesTeam1] = React.useState([]);
  const [pointsTeam1, setPointsTeam1] = React.useState(0);
  const [announcesTeam2, setAnnouncesTeam2] = React.useState([]);
  const [pointsTeam2, setPointsTeam2] = React.useState(0);
  const [distributor, setDistributor] = React.useState('');
  const [selectedValue, setSelectedValue] = useState(false);

  //Context
  const {pointsManche} = useContext(GameContext);

  //FormData
  let formData = new FormData();

  //Fonction qui choisi l'icone de l'atout selon l'atout de la partie
  const ShowAtout = () => {
    switch (gameData.atout) {
      case "trefle":
        return (
          <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/trefle.png')}/>
        )
        break;
      case "carreaux":
        return (
          <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/carreaux.png')}/>
        )
        break;
      case "spades":
        return (
          <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/spades.png')}/>
        )
        break;
      case "hearth":
        return (
          <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/hearth.png')}/>
        )
        break;
      default:
        return (
          <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/question-sign.png')}/>
        )
    }
  }

  //Fonction qui va ajouter le score du match et les annonce d'une equipe
  const updateCurrentGame = async () => {
    formData.append('points_manche', pointsManche);                                 //Met les points de la manche dans le formData
    formData.append('match', selectedValue);                                        //Met false/true si il y a eu matche dans formData
    announcesTeam1.forEach((announcesPoints, index) => {                                   //Parcours les annonces de la team 1
      formData.append(`team1_num${index}_announce`, announcesPoints.points)         //Met toutes les annonces de la team 1 dans formData
    })
    announcesTeam2.forEach((announcesPoints, index) => {                                   //Parcours les annonces de la team 2
      formData.append(`team2_num${index}_announce`, announcesPoints.points)         //Met toutes les annonces de la team 2 dans formData
    })
    return await updateGame(game.game.id, formData)
  }

  //Met a jour le Status de la partie
  const updateStatusGame = async () => {
    formData.append('status', 'game_over');
    return await updateGame(game.game.id, formData)
  }

  //Fonction qui permet d'avoir les info de la partie courante
  const getGameAPI = async (id) => {
    const DataGame = await GetGame(id)
    setGameData(DataGame)
    currentAnnouncesTeam1(DataGame);
    currentAnnouncesTeam2(DataGame);
  };

  //Fonction qui permet de stocker toutes les annonces de la team 2 dans announces
  const currentAnnouncesTeam2 = (data) => {
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

  //Fonction qui permet de stocker toutes les annonces de la team 1 dans announces
  const currentAnnouncesTeam1 = (data) => {
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

  //Fonction qui permet de rafraichire les données d'une partie
  const refreshGame = () => {
    gameData.teams.forEach((team) => {
      team.player.forEach((player) => {
        if (player.distributor)
          setDistributor(player.name)
      })
    })
  }

  //Fonction qui permet de calculer les points des la 2eme equipe selon les points de la manche
  const calculatePoints = (points) => {
    if (157 - points <= 0) {
      return 0
    }
    if (points == 0) {
      return (
        <View style={{flex: 1}}>
          <Text style={{color: 'white'}}>matche ?</Text>
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 100, color: 'white'}}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="oui" value={true}/>
            <Picker.Item label="non" value={false}/>
          </Picker>
          <Text>{selectedValue ? 257 : 157}</Text>
        </View>
      )
    } else {
      return 157 - points
    }
  }

  // UseEffect
  useEffect(() => {
    selectedValue
  },);

  useEffect(() => {
    getGameAPI(game.game.id);
  }, [game]);

  useEffect(() => {
    calculatePoints();
  }, [selectedValue]);


  //Rend la vue si une équipe gagne
  if (gameData.teams !== undefined) {
    if (gameData.winner) {
      if (gameData.teams[0].winner) {
        return (
          <View style={styles.container}>
            <View style={styles.containerText}>
              <Text style={styles.winnerTitle}>{gameData.teams[0].name}</Text>
              <Text style={styles.title}>a gagné</Text>
            </View>
            <View style={styles.containerButton}>
              <Button
                mode={"contained"}
                onPress={() => {
                  {
                    updateStatusGame();
                    navigation.navigate("Home")
                  }
                }}
              >
                Retour au menu
              </Button>
            </View>
          </View>
        )
      }
      if (gameData.teams[1].winner) {
        return (
          <View style={styles.container}>
            <View style={styles.containerText}>
              <Text style={styles.winnerTitle}>{gameData.teams[1].name}</Text>
              <Text style={styles.title}>a gagné</Text>
            </View>
            <View style={styles.containerButton}>
              <Button
                mode={"contained"}
                onPress={() => {
                  {
                    updateStatusGame();
                    navigation.navigate("Home")
                  }
                }}
              >
                Retour au menu
              </Button>
            </View>
          </View>
        )
      }
    } else {
      //Retourne toute la vue principale de la fonction
      return (
        <View style={styles.container}>
          {/*Retourne les différents boutons de la vue*/}
          <View style={styles.containerButtons}>
            <TouchableOpacity onPress={() => {
              getGameAPI(game.game.id);
              refreshGame();
            }}>
              <Image style={styles.img} source={require('../../../assets/img/refresh.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              updateCurrentGame();
            }}>
              <Image style={styles.img} source={require('../../../assets/img/next.png')}/>
            </TouchableOpacity>
            <View style={{justifyContent: 'center'}}>
              <Text> Manche : {gameData.rounds}</Text>
            </View>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Info');
            }}>
              <Image style={styles.img} source={require('../../../assets/img/info.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Home');
            }}>
              <Image style={styles.img} source={require('../../../assets/img/close.png')}/>
            </TouchableOpacity>
          </View>
          {/*Retourne les différents informations de la manche*/}
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
          {/*Retourne la vue des deux équipes*/}
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
  //Retourne la vue en attendant le chargement de la requete API
  if (gameData.teams == undefined) {
    return (
      <View>
        <ActivityIndicator animating={true} color={Colors.red800}/>
>>>>>>> GameScreen
      </View>
    )
  }


<<<<<<< HEAD



  )

=======
>>>>>>> GameScreen
}
