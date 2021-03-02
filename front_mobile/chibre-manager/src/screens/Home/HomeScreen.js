// Importation des bibliothèque
import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

import {styles} from './style'




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
          <Button mode="contained" onPress={() => navigation.navigate('Création de la partie')}>Commencer une partie</Button>
        </View>
        <View>
          <Button
            mode="contained"
            // onPress={() => }
          >
            Reprendre une partie
          </Button>
        </View>
      </View>
    </View>
  )
}


