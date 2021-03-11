//Dépendance extérieure
import {Dimensions, StyleSheet} from "react-native";

//Dépendance intérieure
const {width} = Dimensions.get('window')

//Tableau de style pour la vue
export const styles = StyleSheet.create({
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#5a00e5',
    width: width/1.5,
  },
  whiteFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
});
