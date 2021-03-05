import React, {useEffect} from 'react'

import {View, TouchableOpacity} from 'react-native'
import {Card, RadioButton, Title} from "react-native-paper";

import {styles} from "./style"
import {createAnnounce} from "../../common/api";




const Announces = (props) => {

  let formData = new FormData();
  const [data, setData] = React.useState([]);




  const dataAnnounce = () => {


    formData.append('name', props.name);
    formData.append('points', props.points);
    formData.append('playerid', props.playerid);
    formData.append('rounds', props.gameRound);



    setData(formData)
  };





  const test2 = async () => {


    const test = await createAnnounce(data)
    console.log(props)

  };


  useEffect(  () => {
    dataAnnounce();
  }, []);

  return (
    <TouchableOpacity  onPress={() => test2()}>
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
