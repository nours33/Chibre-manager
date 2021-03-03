import React from 'react'
import {View, Text} from 'react-native'

import {styles} from './style'

import { Card, Title, Paragraph } from 'react-native-paper';

export default function GameScreen() {

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
          <Text style={styles.text}> Equipe 1</Text>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Points Total :</Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Points manches : </Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.bigCard}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Annonces :</Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Joueur 1</Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Joueur 2 </Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>

        </View>

      </View>


      <View style={{marginTop: 100}}>

        <View>
          <Text style={styles.text}> Equipe 2</Text>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Points Total :</Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Points manches : </Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.bigCard}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Annonces :</Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>
        </View>

        <View style={styles.block}>
          <View style={styles.test}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Joueur 1</Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Paragraph style={styles.whiteFont}>Joueur 2 </Paragraph>
                <Title style={styles.whiteFont}></Title>
              </Card.Content>
            </Card>
          </View>

        </View>

      </View>




    </View>
  )

}
