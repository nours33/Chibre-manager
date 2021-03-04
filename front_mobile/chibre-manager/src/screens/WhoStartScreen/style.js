import React from 'react'

import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerPlayer:{

    margin: 40,
    padding: 40,

  },
  containerTeam:{
    flexDirection:'row',
  },
  teamName: {
    fontSize: 40,
    textAlign: 'center'
  }
})
