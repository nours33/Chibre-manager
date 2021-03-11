//Dépendance extérieure
import React, {useEffect} from 'react'
import {View, TouchableOpacity} from 'react-native'

//Dépendance intérieure
import {Card, Title} from "react-native-paper";
import {styles} from "./style"
import {createAnnounce} from "../../common/api";
import {useNavigation} from "@react-navigation/native";

//Crée la fonction Announces
const Announces = (props) => {

  //FormData
  let formData = new FormData();

  //useState
  const [data, setData] = React.useState([]);

  //Navigation
  const navigation = useNavigation();

  //Fonction qui permet de set le nom, les points, l'id du joueur, et les manches dans formData
  const dataAnnounce = () => {
    formData.append('name', props.name);
    formData.append('points', props.points);
    formData.append('playerid', props.playerid);
    formData.append('rounds', props.gameRound);
    setData(formData)
  };

  //Fonction qui permet de crée des annonces et de changer d'écran
  const createCurrentAnnounce = async () => {
    return await createAnnounce(data)
    navigation.navigate('Game')
  };

  //UseEffect
  useEffect(() => {
    dataAnnounce();
  }, []);

  //Retourne la vue principale de la fonction
  return (
    <TouchableOpacity onPress={() => createCurrentAnnounce()}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.playerContainer}>
            <Title style={{...styles.whiteFont}}>{props.name}</Title>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  )
}

export default Announces;
