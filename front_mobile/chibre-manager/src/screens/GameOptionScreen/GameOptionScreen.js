//Dépendance extérieure
import React from 'react'
import {View, Text} from 'react-native'

//Dépendance intérieure
import {Button} from 'react-native-paper'
import {useNavigation} from "@react-navigation/native";
import {destroyGame} from "../../common/api";
import {styles} from './style'

//Crée la fonction GameOptionScreen
export default function GameOptionScreen({route}) {

  //Navigation
  const navigation = useNavigation();

  //Route
  const {game} = route.params;

  //Création d'un tableau d'objet
  let newGame = {};
  newGame.game = game

  //Fonction qui permet de supprimer une partie
  const deleteGame = () => {
    destroyGame(game.id)
  }

  //Rendu principale de la fonction
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <View style={styles.containerInfo}>
            <View style={styles.containerPlayer}>
              <Text>Equipe 1 : </Text>
              <Text style={styles.titleName}>{game.teams[0].name}</Text>
            </View>

            <View style={styles.containerPlayer}>
              <Text>Joueur 1 : </Text>
              <Text style={styles.titleName}>{game.teams[0].player[0].name}</Text>
              <Text>Joueur 2 : </Text>
              <Text style={styles.titleName}>{game.teams[0].player[1].name}</Text>
            </View>
            <View style={styles.containerPlayer}>
              <Text>Points : </Text>
              <Text style={styles.titleName}>{game.teams[0].points}</Text>
            </View>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.containerPlayer}>
              <Text>Equipe 1 : </Text>
              <Text style={styles.titleName}>{game.teams[1].name}</Text>
            </View>
            <View style={styles.containerPlayer}>
              <Text>Joueur 3 : </Text>
              <Text style={styles.titleName}>{game.teams[1].player[0].name}</Text>
              <Text>Joueur 4 : </Text>
              <Text style={styles.titleName}>{game.teams[1].player[1].name}</Text>
            </View>
            <View style={styles.containerPlayer}>
              <Text>Points : </Text>
              <Text style={styles.titleName}>{game.teams[0].points}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Option Screen</Text>
        <View style={styles.containerButton}>
          <Button
            mode={"contained"}
            onPress={() => {
              deleteGame();
              navigation.navigate("Home")
            }}
          >
            Supprimer
          </Button>
          <Button
            mode={"contained"}
            style={{marginTop: 20}}
            onPress={() => {
              navigation.navigate("Game", {
                game: newGame
              })
            }}
          >
            Reprendre
          </Button>
        </View>
      </View>
    </View>
  )
}
