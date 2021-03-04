import React, {useEffect} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

import {styles} from './style'

import { Card, Title, Paragraph, Colors, ActivityIndicator } from 'react-native-paper';
import {GetGame} from "../../common/api";





export default function GameScreen({route}) {
  const {game} = route.params;
  const [gameData, setGameData] = React.useState([]);


  const [teamOne, setTeamOne] = React.useState([]);
  const [teamTwo, setTeamTwo] = React.useState('');

  const [player1, setPlayer1] = React.useState('');
  const [Player2, setPlayer2] = React.useState('');


  const [test, setTest] = React.useState(0);




  const [teamOnePoints, setTeamOnePoints] = React.useState('');
  const [teamTwoPoints, setTeamTwoPoints] = React.useState('');


  const [roundPoints, setRoundPoints] = React.useState(0);



  const getGameAPI = async (id) => {
    const DataGame = await GetGame(id)
    setGameData(DataGame)
  };






  const setParams = () => {
    if (gameData.teams !== undefined) {
      gameData.teams[0].name
      setTeamOne({
        ...teamOne,
        name: gameData.teams[0].name,
        point: gameData.teams[0].points,
      });
    }
    else {
      return null
    }
  }



  useEffect(  () => {
    getGameAPI(game.game.id);
    setParams();
  }, []);

  if (gameData.teams !== undefined) {


  console.log(gameData)
  console.log(gameData)


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


        <View style={{marginTop: 10}}>

          <View>
            <Text style={styles.text}>  {gameData.teams[1].name}</Text>
          </View>

          <View style={styles.block}>
            <View style={styles.test}>
              <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <Paragraph style={styles.whiteFont}>Points Total : {gameData.teams[1].points}</Paragraph>
                  <Title style={styles.whiteFont}></Title>
                </Card.Content>
              </Card>
            </View>

            <View>
              <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <Paragraph style={styles.whiteFont}>Points manches : {157 - roundPoints } </Paragraph>
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
                    <Paragraph style={styles.whiteFont}>{gameData.teams[1].player[0].name}</Paragraph>
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

            <View>
              <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <View style={styles.playerContainer}>
                    <Paragraph style={styles.whiteFont}>{gameData.teams[1].player[1].name}</Paragraph>
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
  if (gameData.teams == undefined) {
    return (
      <View>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </View>

    )
  }
}
