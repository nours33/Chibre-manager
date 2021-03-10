//Dépendance extérieure
import {Dimensions, StyleSheet} from "react-native";

//Dépendance intérieure
const {width} = Dimensions.get('window')

//Tableau de style pour la vue
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});
