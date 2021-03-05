import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('window')


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center'
  },


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
