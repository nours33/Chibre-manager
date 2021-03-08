import React, {useState, useContext} from 'react'

import {View, Text, TouchableOpacity, Image, FlatList, Modal, TextInput, Pressable } from 'react-native'


import {styles} from './style'
import {useNavigation} from "@react-navigation/native";


import {GameContext} from "../../../App";






const TeamView = (props) => {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);


  const {pointsManche, setPointsManche} = useContext(GameContext);


  const TestView = () => {

    if (props.clickable == true) {
      return (
        <TouchableOpacity    onPress={() => setModalVisible(true)}>
          <View style={styles.card}>
            <Text style={{color: 'white'}}>Points manche : {props.pointsManche}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    else {
      return (
        <View style={styles.card}>
          <Text style={{color: 'white'}}>Points manche : {props.pointsManche}</Text>
        </View>
      )
    }

  }

  // const DistributorOrNot = () => {
  //   console.log(props.player1)
  //   if (props.player1.first_to_play) {
  //    return (
  //      <Image style={styles.img} source={require('../../../assets/img/plus.png')}  />
  //    )
  //   }
  //   if (props.player2.first_to_play) {
  //     return (
  //       <Image style={styles.img} source={require('../../../assets/img/plus.png')}  />
  //     )
  //
  //   }
  // }


  return (

    <View style={styles.container}>


      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.bigTitle}> {props.team.name}</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              keyboardType={"numeric"}
              value={pointsManche}
              onChangeText={pointsManche => setPointsManche(pointsManche)}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>



      <View>

        <View>
          <Text style={styles.bigTitle}> {props.team.name}</Text>
        </View>


        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={{color: 'white'}}>Points Total: {props.pointsTotal}  </Text>
          </View>
          <TestView />
        </View>


        <View style={styles.cardContainer}>
          <View style={styles.bigCard}>
            <Text style={{color: 'white'}}>Annonces: </Text>
            <FlatList
              keyExtractor={(post) => post.id.toString()}
              data={props.announcesTeam}
              renderItem={({item}) => {
                return (
                    <Text style={{color: 'white'}}>
                      {item.name} ({item.points})
                    </Text>
                )
              }}
            />
          </View>
        </View>






        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={{color: 'white'}}>{props.player1.name} </Text>
            {/*<DistributorOrNot/>*/}
            <Text style={{color: 'white'}}>Ajouter une annonce </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Announces', {
              playerid: props.player1.id,
              gameid: props.game.id,
              teamid: props.team.id,
              gameRound: props.game.rounds
            })
            }>
              <Image style={styles.img} source={require('../../../assets/img/plus.png')}  />
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={{color: 'white'}}>{props.player2.name} </Text>
            <Text style={{color: 'white'}}>Ajouter une annonce </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Announces', {
              playerid: props.player2.id,
              gameid: props.game.id,
              teamid: props.team.id,
              gameRound: props.game.rounds,
              setAnnounce: props.setAnnounce
            })
            }>
              <Image style={styles.img} source={require('../../../assets/img/plus.png')}  />
            </TouchableOpacity>
          </View>
        </View>



      </View>
    </View>
  )
}


export default  TeamView;
