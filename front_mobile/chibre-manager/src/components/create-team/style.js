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
  },
//Title
  titleContainer: {
    marginTop: width/5,
  },
  title: {
    fontSize: 42,
  },
//Subtitle
  subtitle: {
    fontSize: 24,
    textAlign: 'center'
  },
//InputText
  inputTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 30,
  },
  inputText: {
    width: width/2.5,
    marginRight: width/20,
    marginLeft: width/20,
  },

  containerTextTeam:{
    marginTop: 20,
  },
// Image
  img: {
    width: 50,
    height: 50,
    marginTop: 20,
  }
});
