import React, {useState, useContext} from 'react'

import {View, Text, TouchableOpacity, Image, FlatList, Modal, TextInput, Pressable } from 'react-native'


import {styles} from './style'
import {useNavigation} from "@react-navigation/native";


import {GameContext} from "../../../App";
import {destroyAnnounce} from "../../common/api";






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

  const ShowAtout = () => {
    switch(props.atout) {
      case "trefle":
        return (
          <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/trefle.png')} />
        )
        break;

      case "carreaux":
        return (
          <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/carreaux.png')} />
        )
        break;

      case "spades":
        return (
          <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/spades.png')} />
        )
        break;

      case "hearth":
        return (
          <Image style={styles.imgAtout} source={require('../../../assets/img/symbole/hearth.png')} />
        )
        break;

      default:
        return null


    }
  }



  const Distributor1 = () => {

    if (props.player1.distributor) {
      return (
        <Image style={styles.imgAtout} source={require('../../../assets/img/cards.png')} />
      )
    }
    else {
      return null
    }

  }

  const Distributor2 = () => {

    if (props.player2.distributor) {
      return (
        <Image style={styles.imgAtout} source={require('../../../assets/img/cards.png')} />
      )
    }
    else {
      return null
    }

  }

  const AtoutPlayer1 = () => {

    if (props.player1.first_to_play) {
      return (
        <ShowAtout/>
      )
    }
    else {
      return null
    }

  }

  const AtoutPlayer2 = () => {

    if (props.player2.first_to_play) {
      return (
        <ShowAtout/>
      )
    }
    else {
      return null
    }
  }


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

                const test2 = async () => {

                  const DataGame = await destroyAnnounce(item.id)
                }

                return (
                  <View>
                    <TouchableOpacity onPress={() => {
                      test2();
                    }}>
                      <Text style={{color: 'white'}}>
                        {item.name} ({item.points})
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </View>
        </View>


        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.containerDistributor}>
              <Text style={{color: 'white'}}>{props.player1.name} </Text>
              <AtoutPlayer1/>
              <Distributor1/>
            </View>
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
            <View style={styles.containerDistributor}>
              <Text style={{color: 'white'}}>{props.player2.name} </Text>
              <AtoutPlayer2/>
              <Distributor2/>
            </View>
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
