//Dépendance extérieure
import {Dimensions, StyleSheet} from "react-native";

//Dépendance intérieure
const {width, height} = Dimensions.get('window')

//Tableau de style pour la vue
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
  },
});
