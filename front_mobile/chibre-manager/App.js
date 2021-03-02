import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';


const {width, height} = Dimensions.get('window')

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chibre Manager</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/img/logo_home.jpg')}/>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSingleContainer}>
          <Button mode="contained">Commencer une partie</Button>
        </View>
        <View>
          <Button mode="contained">Reprendre une partie</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  titleContainer: {
    marginTop: width/3,
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
  imgContainer: {
    flex: 1,
    justifyContent: 'center',

  },
  img: {

  }
});
