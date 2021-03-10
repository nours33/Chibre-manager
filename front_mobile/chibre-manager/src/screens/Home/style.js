//Dépendance extérieure
import {StyleSheet, Dimensions} from "react-native";

//Dépendance intérieure
const {width} = Dimensions.get('window')

//Tableau de style pour la vue
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  titleContainer: {
    marginTop: width/10,
  },
  title: {
    fontSize: 42,
  },
  buttonContainer: {
    flex: 1,
    maxHeight: 200,
    justifyContent: 'flex-start',
  },
  buttonSingleContainer: {
    marginBottom: 30,
  },
});
