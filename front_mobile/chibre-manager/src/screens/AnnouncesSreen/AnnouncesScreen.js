import React from 'react'

import {View, Text} from 'react-native'


export default function AnnouncesScreen({route}) {
  const {playerid, gameid, itemContent} = route.params;
  console.log(playerid)
  return (
    <View>
      <Text> {playerid}</Text>
      <Text> {gameid}</Text>
    </View>
  )
}
