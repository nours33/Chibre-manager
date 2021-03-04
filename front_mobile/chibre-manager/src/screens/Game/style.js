import {StyleSheet, Dimensions} from "react-native";
const {width, height} = Dimensions.get('window')


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  block: {
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#5a00e5',
    width: width/2.3,
  },
  bigCard: {
    backgroundColor: '#5a00e5',
    width: width/1.07,
  },
  whiteFont: {
    color: 'white',
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },

  littleText: {
    fontSize: 12,
  },
  playerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  img:{
    width: 20,
    height: 20,
  }

});
