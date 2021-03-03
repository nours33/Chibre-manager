import {StyleSheet, Dimensions} from "react-native";
const {width, height} = Dimensions.get('window')


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
  },
  inputText: {
    width: width/2.5,
    marginRight: width/20,
    marginLeft: width/20,
  },
// Image
  img: {
    width: 50,
    height: 50,
  }
});
