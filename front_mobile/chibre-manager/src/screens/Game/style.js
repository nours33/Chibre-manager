//Dépendance extérieure
import {StyleSheet, Dimensions} from "react-native";

//Dépendance intérieure
const {width} = Dimensions.get('window');

//Tableau de style pour la vue
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerText: {
    marginBottom: 50
  },
  cardContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 5,
    width: width / 2.3,
  },
  img: {
    width: 35,
    height: 35,
  },
  imgAtout: {
    width: 25,
    height: 25,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
  },
  winnerTitle: {
    textAlign: 'center',
    fontSize: 34,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
