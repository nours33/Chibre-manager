//Dépendance extérieure
import React from 'react'
import {View, Text, Image, TouchableOpacity} from "react-native";

//Dépendance intérieure
import {styles} from './style'

//Crée la fonction CreateFirstTeamScreen
export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={styles.bigTitle}>Refresh :</Text>
        <Image style={styles.img} source={require('../../../assets/img/refresh.png')}/>
        <Text style={{textAlign: 'center', marginTop: 10, fontSize: 18}}>Après chaque action vous devez rafraichir
          l'écran grace à ce bouton</Text>
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.bigTitle}>Manche suivante :</Text>
        <Image style={styles.img} source={require('../../../assets/img/next.png')}/>
        <Text style={{textAlign: 'center', marginTop: 10, fontSize: 18}}>Pour passer à la manche suivante vous devez
          utiliser ce bouton</Text>
      </View>
    </View>
  )
}
