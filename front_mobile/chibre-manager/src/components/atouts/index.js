//Dépendance extérieure
import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'

//Dépendance intérieure
import {styles} from "./style"
import {updateGame} from "../../common/api";
import {useNavigation} from "@react-navigation/native";

//Crée la fonction AtoutCard
const AtoutCard = (props) => {

  //FormData
  let formData = new FormData();

  //Navigation
  const navigation = useNavigation();

  //Fonction qui permet de set l'atout et le chibre ainsi que de changer d'écran
  const updateCurrentGame = async (id, value) => {
    formData.append('atout', value.color);
    formData.append('chibre', value.chibre);
    const updateCurrentGame = await updateGame(id, formData)
    navigation.navigate("Game")
  };

  //Retourne la vue principale de la fonction
  return (
    <TouchableOpacity onPress={() => {
      updateCurrentGame(props.gameId, props)
    }}>
      <View style={styles.card}>
        <Image style={styles.img} source={props.imageSource}/>
      </View>
    </TouchableOpacity>
  )
}

export default AtoutCard;
