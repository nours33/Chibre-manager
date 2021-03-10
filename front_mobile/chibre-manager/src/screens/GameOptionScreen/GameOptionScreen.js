import React, {useEffect, useState} from 'react'

import {View, Text} from 'react-native'


import {Button} from 'react-native-paper'
import {useNavigation} from "@react-navigation/native";

export default function GameOptionScreen({route}) {



  const navigation = useNavigation();
  const {game} = route.params;

  let test = []
  let newGame = {};
  newGame.game = game


  console.log(newGame)


  return (
    <View>
      <Text>Option Screen</Text>
      <View>
        <Button>Supprimer</Button>
        <Button
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
  )
}
