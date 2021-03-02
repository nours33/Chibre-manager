import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window')

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
  button: {
    paddingTop: 10
  },

});
