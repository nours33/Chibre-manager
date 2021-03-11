import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  imgAtout: {
    width: 20,
    height: 20,
  },
  img:{
    width: 20,
    height: 20,
  },

  bigTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  cardContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',

  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',

  },

  containerDistributor: {
    flexDirection: 'row',
  },

  card: {
    backgroundColor: 'purple',
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    width: width/2.3,
    marginBottom: 5,
    marginTop: 5,
  },

  bigCard: {
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 5,
    width: width/1.07,
  }


});
