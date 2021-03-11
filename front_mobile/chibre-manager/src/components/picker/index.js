//Dépendance extérieure
import React from 'react';
import {Text, View, Picker} from "react-native";

//Dépendance intérieure
import {styles} from "./style";

//Crée la fonction PickerCustom
const PickerCustom = (props) => {

  //Retourne la vue principale de la fonction
  return (
    <View>
      <Text style={styles.title}> Combien de points ?</Text>
      <Picker
        mode={"dropdown"}
        selectedValue={props.selectedValue}
        style={{height: 50, width: 150, color: 'black'}}
        onValueChange={(itemValue) => props.callback(itemValue)}
      >
        <Picker.Item label="1000 points" value={1000}/>
        <Picker.Item label="1500 points" value={1500}/>
      </Picker>
    </View>
  )
}

export default PickerCustom;
