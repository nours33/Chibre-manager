/**
 * The external dependencies
 */
import React from 'react';
import {Image, Text, View} from "react-native";

/**
 * The Internal dependencies
 */
import {styles} from "./style";
import {Button, TextInput} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

const CreateTeam = (props) => {
  const [playerOne, setPlayerOne] = React.useState('');
  const [playerTwo, setPlayerTwo] = React.useState('');
  const [team, setTeam] = React.useState('');

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        <Image style={styles.img}  source={props.icone}/>
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.inputText
            }
            label="Nom de l'équipe"
            value={team}
            onChangeText={team => setTeam(team)}
            mode={'outlined'}
          />
        </View>
        <View style={styles.inputTextContainer}>
          <View style={{ alignItems: 'center'}}>
            <TextInput
              style={styles.inputText
              }
              label={props.namePlayerOne}
              value={playerOne}
              onChangeText={playerOne => setPlayerOne(playerOne)}
              mode={'outlined'}
            />
          </View>
          <View style={{ alignItems: 'center'}}>
            <TextInput
              style={styles.inputText
              }
              label={props.namePlayerTwo}
              value={playerTwo}
              onChangeText={playerTwo => setPlayerTwo(playerTwo)}
              mode={'outlined'}
            />
          </View>
        </View>
      </View>
      <View>
        <Button mode="contained" onPress={() => navigation.navigate('CreateTeam2')} >Suivant</Button>
      </View>
    </View>
  )
};

export default CreateTeam;
