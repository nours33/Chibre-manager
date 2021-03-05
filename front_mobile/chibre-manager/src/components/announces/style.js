import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('window')


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
