import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native";

import {styles} from './style'
import {Button, RadioButton, TextInput} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";


export default function CreateGameScreen() {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState('first');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Creation des joueurs</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img}  source={require('../../../assets/img/team.png')}/>
      </View>


      <View>
        <View>
          <Text style={styles.subtitle}> Equipe 1</Text>
        </View>
        <View style={styles.inputTextContainer}>
          <View style={{ alignItems: 'center'}}>
            <TextInput
              style={styles.inputText
              }
              label="Joueur 4"
              value={text}
              onChangeText={text => setText(text)}
              mode={'outlined'}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Premier a jouer ?</Text>
              <RadioButton
                value="fourth"
                status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('fourth')}
              />
            </View>
          </View>

          <View style={{ alignItems: 'center'}}>
            <TextInput
              style={styles.inputText
              }
              label="Joueur 4"
              value={text}
              onChangeText={text => setText(text)}
              mode={'outlined'}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Premier a jouer ?</Text>
              <RadioButton
                value="fourth"
                status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('fourth')}
              />
            </View>
          </View>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.subtitle}> Equipe 1</Text>
        </View>
        <View style={styles.inputTextContainer}>


          <View style={{ alignItems: 'center'}}>
            <TextInput
              style={styles.inputText
              }
              label="Joueur 4"
              value={text}
              onChangeText={text => setText(text)}
              mode={'outlined'}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Premier a jouer ?</Text>
              <RadioButton
                value="fourth"
                status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('fourth')}
              />
            </View>
          </View>



          <View style={{ alignItems: 'center'}}>
            <TextInput
              style={styles.inputText
              }
              label="Joueur 4"
              value={text}
              onChangeText={text => setText(text)}
              mode={'outlined'}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Premier a jouer ?</Text>
              <RadioButton
                value="fourth"
                status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('fourth')}
              />
            </View>
          </View>
        </View>
      </View>

      <View>
        <Button mode="contained" onPress={() => navigation.navigate('commencez la partie')} >Commencez la partie !</Button>
      </View>
    </View>
  )
}


