//Dépendance extérieure
import React from 'react'
import {View, Text} from 'react-native'

//Dépendance intérieure
import {RadioButton} from 'react-native-paper';
import {styles} from "./style";
import AtoutCard from "../../components/atouts";

//Crée la fonction AtoutsScreen
export default function AtoutsScreen({route}) {

  //Route
  const {game} = route.params;

  //useState
  const [checked, setChecked] = React.useState(true);

  //Retourne toute la vue principale de la fonction
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Choisissez un atout svp</Text>
      <View style={styles.containerCard}>
        <AtoutCard
          imageSource={require('../../../assets/img/symbole/trefle.png')}
          gameId={game.id}
          color={"trefle"}
          chibre={checked}
        />
        <AtoutCard
          imageSource={require('../../../assets/img/symbole/carreaux.png')}
          gameId={game.id}
          color={"carreaux"}
          chibre={checked}
        />
        <AtoutCard
          imageSource={require('../../../assets/img/symbole/spades.png')}
          gameId={game.id}
          color={"spades"}
          chibre={checked}
        />
        <AtoutCard
          imageSource={require('../../../assets/img/symbole/hearth.png')}
          gameId={game.id}
          color={"hearth"}
          chibre={checked}
        />
      </View>
      <Text style={styles.title}> Chibre ?</Text>
      <View style={styles.containerCard}>
        <View style={{alignItems: 'center'}}>
          <Text>Oui</Text>
          <RadioButton
            value={true}
            status={checked === true ? 'checked' : 'unchecked'}
            onPress={() => setChecked(true)}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>Non</Text>
          <RadioButton
            value={false}
            status={checked === false ? 'checked' : 'unchecked'}
            onPress={() => setChecked(false)}
          />
        </View>
      </View>
    </View>
  )
}
