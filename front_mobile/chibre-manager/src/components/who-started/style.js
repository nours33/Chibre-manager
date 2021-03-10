import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
  },
  containerTeam: {
    margin: 30,
  },
  teamName:{
    fontSize: 40,
    textAlign: 'center',
  },
  containerPlayer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  containerPlayers: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  }

});
