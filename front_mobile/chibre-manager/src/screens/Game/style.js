import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  cardContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',

  },

  card: {
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 5,
    width: width/2.3,
  },

  img: {
    width: 35,
    height: 35,
  },

  imgAtout: {
    width: 25,
    height: 25,
  },

  containerButtons: {
    flexDirection: 'row'
  }


});
