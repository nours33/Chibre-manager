/**
 * The external dependencies
 */
import React from 'react';
import {Image, Text, View} from 'react-native';
/**
 * The Internal dependencies
 */
import {useNavigation} from "@react-navigation/native";
import {Button} from "react-native-paper";
import {CreateGame} from "../../common/api";
import {styles} from './style'


export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chibre Manager</Text>
      </View>
      <View>
        <Image source={require('../../../assets/img/logo_home.jpg')}/>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSingleContainer}>
          <Button
            mode="contained"
            onPress={() => {navigation.navigate('CreateTeam1'); CreateGame(); }}
          >
            Commencer une partie
          </Button>
        </View>
        <View>
          <Button
            mode="contained"
          >
            Reprendre une partie
          </Button>
        </View>
      </View>
    </View>
  )
}


