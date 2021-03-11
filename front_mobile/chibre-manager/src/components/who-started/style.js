//Dépendance extérieure
import {StyleSheet} from "react-native";

//Tableau de style pour la vue
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
