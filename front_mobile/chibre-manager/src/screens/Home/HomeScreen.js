//Dépendance extérieure
import React, {useState, useEffect} from 'react';
import {Image, Text, View} from 'react-native';

//Dépendance intérieure
import {useNavigation} from "@react-navigation/native";
import {Button} from "react-native-paper";
import {styles} from './style'

//Crée la fonction HomeScreen
export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chibre Manager</Text>
      </View>
      <View>
        <Image source={require('../../../assets/img/logo_home.jpg')}/>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSingleContainer}>
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate('CreateTeam1')
            }}
          >
            Commencer une partie
          </Button>
        </View>
        <View>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Historical')}
          >
            Reprendre une partie
          </Button>
        </View>
      </View>
    </View>
  )
}
