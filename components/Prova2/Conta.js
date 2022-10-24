import * as React from 'react';
import { useState, useRef } from 'react';
import { Animated, Switch, Text, View } from 'react-native';
import Styles from "../Styles";
import Input from "../Input";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { colors } from '../Colors'
import { Botao } from '../Botao'

const Conta = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(null);
  const [genero, setGenero] = useState("Selecione");  
  const [limite, setLimite] = useState(1);

  const [switchAtivado, setSwitchAtivado] = useState(false);
  const toggleSwitch = () => setSwitchAtivado(previousState => !previousState);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const Cadastrar = () => {
      let estudante;
      if (!switchAtivado) {
          estudante="Não"
      } else {
          estudante="Sim"
      }
      if (nome === "" || idade === null || limite === 0) {
        alert("Preencha os campos!!!")
      } 
      else {
        alert('Cadastro feito!' + '\n' + 'Nome: ' + nome + '\n' + 'Idade: ' + idade + '\n' + "Genero: " + genero + '\n' +
              'Limite: ' + limite.toFixed(2) + '\n' + 'Conta de estudante: ' + estudante + '\n' )
        }
    }

  const Limpar = () => {
    setNome("");
    setIdade(null);
    setLimite(1);
    setGenero('Selecione');
    setSwitchAtivado(false);
  }

  const fadeIn = () => {    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 28000
    }).start();
  };
  
  const fadeOut = () => {    
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2800
    }).start();
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.paragraph}>Nome:</Text>
      <Input style={Styles.Input}
        onChangeText={setNome}
        value={nome}
        placeholder="Nome"
        />
      <Text style={Styles.paragraph}>Idade:</Text>
      <Input style={Styles.Input}
        onChangeText={setIdade}
        keyboardType="numeric"
        value={idade}
        placeholder="Idade"
      />
      <Text style={Styles.paragraph}>Genero:</Text>
      <Picker
        style={Styles.input}
        Genero={genero}
        onValueChange={(itemValue) => setGenero(itemValue)
        }>
        <Picker.Item label="Selecione" value=""/>
        <Picker.Item label="M" value="M"/>
        <Picker.Item label="F" value="F"/>
      </Picker>
      <Text style={Styles.paragraph}>Limite: {limite.toFixed(2)}</Text>
      <View>
        <Slider
          style={Styles.slider}
          minimumValue={1}
          maximumValue={5000}
          value={limite}
          onValueChange={setLimite}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="black"
        />
      </View>   
      <Text style={Styles.paragraph}>Estudante:</Text>
      <Switch style={Styles.switchAdjust}
      trackColor={{ false: "black", true: "blue" }}
      thumbColor={switchAtivado ? "gray" : "red"}
      ios_backgroundColor="gray"
      onValueChange={toggleSwitch}
      value={switchAtivado}
      />     
        
      <Botao
        style={Styles.botao}
        label='Cadastrar'
        action={Cadastrar}
        cor={colors.botaoAzul}
      />
      <Botao
        style={Styles.botao}
        label="Zerar"
        action={Limpar}
        cor={colors.botaoVermelho}                          
      />
      
      <View style={{marginTop: 20}}>
        <Botao style={Styles.botao}
          label="Termos" 
          action={fadeIn} 
          cor={colors.botaoCinza} />
          
      </View>
      <Animated.View
        style={[
          Styles.fadingContainer,
          {            
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={Styles.fraseText}>você confirma os termos de serviço.</Text>
        
      </Animated.View>
    </View>
  );
}
export default Conta;