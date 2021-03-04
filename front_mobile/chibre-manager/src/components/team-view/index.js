import React, {useState} from 'react'

import {View, Text, TouchableOpacity, Image } from 'react-native'
import {Card, Paragraph, Title} from "react-native-paper";

import {styles} from './style'
import {useNavigation} from "@react-navigation/native";




const TeamView = (props) => {

  const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <View>

        <View>
          <Text style={styles.text}> {props.team.name}</Text>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Points Total : {props.team.points}</Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Points manches : 0 </Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.bigCard}>
              <Card.Content style={styles.cardContent}>
                <View>
                  <Paragraph style={styles.whiteFont}>Annonces :</Paragraph>
                  <Title style={styles.whiteFont}></Title>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.playerContainer}>
                  <Paragraph style={styles.whiteFont}>{props.player1.name}</Paragraph>
                  <Title style={{...styles.whiteFont, ...styles.littleText}}>Ajouter une annonce</Title>
                  <View stlye={styles.containerImg}>
                    <TouchableOpacity onPress={() => navigation.navigate('Announces', {
                      playerid: props.player1.id,
                      gameid: props.game.id
                      })
                    }>
                      <Image style={styles.img} source={require('../../../assets/img/plus.png')}  />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.playerContainer}>
                  <Paragraph style={styles.whiteFont}>{props.player2.name }</Paragraph>
                  <Title style={{...styles.whiteFont, ...styles.littleText}}>Ajouter une annonce</Title>
                  <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Announces', {
                      playerid: props.player2.id,
                      gameid: props.game.id
                      })}
                    >
                      <Image style={styles.img} source={require('../../../assets/img/plus.png')}  />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>

        </View>

      </View>
    </View>
  )
}


export default  TeamView;
