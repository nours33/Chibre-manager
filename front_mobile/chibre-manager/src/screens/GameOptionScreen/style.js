//Dépendance extérieure
import {StyleSheet} from "react-native";

//Tableau de style pour la vue
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  container2: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  containerInfo: {
    margin: 10,
  },
  titleName: {
    marginRight: 20,
    marginLeft: 20,
    fontSize: 28
  }
});
