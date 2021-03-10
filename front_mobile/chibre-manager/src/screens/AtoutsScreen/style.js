import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('window')


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
  card: {
    borderWidth: 1,
    width: width/4.5,
    height: height/8,
    padding: 20,
  },
  img:{
    width: 50,
    height: 50,
  }



});
