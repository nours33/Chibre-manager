import React, {useContext} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {GameContext} from "../../../App";


export default function WhoStartScreen() {
  const { team1,team2 } = useContext(GameContext);


  return (

    <View>
      <View>
        <Text>{team1.team1}</Text>
        <Text>
          {team1.player1}
        </Text>
        <Text>
          {team1.player2}
        </Text>
      </View>

      <View>
        <Text>{team2.team2}</Text>
        <Text>
          {team2.player3}
        </Text>
        <Text>
          {team2.player4}
        </Text>
      </View>
    </View>



  )
}
