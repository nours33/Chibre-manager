/**
 * The external dependencies
 */
import React, {useState, useEffect} from 'react';
import {Image, Text, View, FlatList,TouchableOpacity} from "react-native";

/**
 * The Internal dependencies
 */
import { DataTable } from 'react-native-paper';
import moment from 'moment'

import {useNavigation} from "@react-navigation/native";

const GameHistory = (props) => {
  const navigation = useNavigation();
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Nom</DataTable.Title>
        <DataTable.Title>Team</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
      </DataTable.Header>

        <FlatList
          keyExtractor={(post) => post.id.toString()}
          data={props['GameData']}
          renderItem={({item}) => {

           var date_good_format = moment(item.created_at).local('fr').format('L')

            console.log(item)

            if (item.status && item['teams'][0] !== undefined ) {
              if ( item['teams'][0].player[0] !== undefined ) {

                console.log(item['teams'][0].player)
                return (
                  <TouchableOpacity onPress={() => { navigation.navigate('GameOption', {
                      game: item
                    })

                  }}>
                    <DataTable.Row>
                      <DataTable.Cell>{item.name}</DataTable.Cell>
                      <DataTable.Cell>{item['teams'][0].name}  {item['teams'][1].name}</DataTable.Cell>
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
