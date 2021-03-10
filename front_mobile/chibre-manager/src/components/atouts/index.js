import React, {useEffect} from 'react'

import {View, Text, TouchableOpacity, Image} from 'react-native'


import {styles} from "./style"

import {updateGame} from "../../common/api";
import {useNavigation} from "@react-navigation/native";





const AtoutCard = (props) => {

  let formData = new FormData();
  const navigation = useNavigation();
  const test2 = async (id, value) => {

    formData.append('atout', value.color);
    formData.append('chibre', value.chibre);

    const test = await updateGame(id, formData)

    navigation.navigate('Game')
  };


  return (
    <TouchableOpacity onPress={()=> {
      test2(props.gameId, props)
    }}>
      <View style={styles.card}>
        <Image style={styles.img} source={props.imageSource}/>
      </View>
    </TouchableOpacity>
  )

}

export default AtoutCard;
