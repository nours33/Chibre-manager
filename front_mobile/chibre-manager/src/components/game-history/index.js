//Dépendance extérieure
import React from 'react';
import {FlatList, TouchableOpacity} from "react-native";

//Dépendance intérieure
import {DataTable} from 'react-native-paper';
import moment from 'moment'
import {useNavigation} from "@react-navigation/native";

//Crée la fonction GameHistory
const GameHistory = (props) => {

  //Navigation
  const navigation = useNavigation();

  //Retourne la vue principale de la fonction
  return (
    <DataTable>
      {/*Header du tableau*/}
      <DataTable.Header>
        <DataTable.Title>Nom</DataTable.Title>
        <DataTable.Title>Team</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
      </DataTable.Header>
      {/*Flatlist des parties*/}
      <FlatList
        keyExtractor={(post) => post.id.toString()}
        data={props['GameData']}
        renderItem={({item}) => {
          var date_good_format = moment(item.created_at).local('fr').format('L')   //Met la date au bon format
          if (item.status && item['teams'][0] !== undefined) {
            if (item['teams'][0].player[0] !== undefined) {
              return (
                <TouchableOpacity onPress={() => {
                  navigation.navigate('GameOption', {
                    game: item
                  })
                }}>
                  <DataTable.Row>
                    <DataTable.Cell>{item.name}</DataTable.Cell>
                    <DataTable.Cell>{item['teams'][0].name} {item['teams'][1].name}</DataTable.Cell>
                    <DataTable.Cell>{date_good_format}</DataTable.Cell>
                  </DataTable.Row>
                </TouchableOpacity>
              )
            }
          }
        }}
      />
    </DataTable>
  )
}

export default GameHistory;
