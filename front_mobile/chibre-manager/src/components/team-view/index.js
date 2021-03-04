import React from 'react'

import {View, text, Text, TouchableOpacity, Image} from 'react-native'
import {styles} from "../../screens/Game/style";
import {Card, Paragraph, Title} from "react-native-paper";

const TeamView = () => {


  return (


    <View style={styles.container}>

      <View style={styles.block}>

        <View style={styles.test}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Paragraph style={styles.whiteFont}>Atout de la manche :</Paragraph>
              <Title style={styles.whiteFont}></Title>
            </Card.Content>
          </Card>
        </View>

        <View>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Paragraph style={styles.whiteFont}>Qui a distribuer ? </Paragraph>
              <Title style={styles.whiteFont}></Title>
            </Card.Content>
          </Card>
        </View>
      </View>


      <View>

        <View>
          <Text style={styles.text}> {gameData.teams[0].name}</Text>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Points Total : {gameData.teams[0].points}</Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Points manches : {roundPoints} </Paragraph>
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
                  <Paragraph style={styles.whiteFont}>{gameData.teams[0].player[0].name}</Paragraph>
                  <Title style={{...styles.whiteFont, ...styles.littleText}}>Ajouter une annonce</Title>
                  <View stlye={styles.containerImg}>
                    <TouchableOpacity>
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
                  <Paragraph style={styles.whiteFont}>{gameData.teams[0].player[1].name} </Paragraph>
                  <Title style={{...styles.whiteFont, ...styles.littleText}}>Ajouter une annonce</Title>
                  <View>
                    <TouchableOpacity>
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

export default TeamView;
