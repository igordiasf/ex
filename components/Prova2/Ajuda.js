import * as React from 'react';
import {useState} from 'react';
import { Animated, Text, View, Linking } from 'react-native';
import Botao from "../Botao";
import {tamanhos} from "../Tamanhos";
import Styles from "../Styles";
import { colors } from '../Colors'


const Ajuda = ({navigation}) => {
    const [fonte] = useState(new Animated.Value(tamanhos.padraoPequeno));
    Animated.spring(fonte, {
        toValue: tamanhos.padraoMedio,
        speed: 20,
        bounciness: 40,
    }).start();

    return (

        <View style={Styles.container}>

            <Animated.Text style={[Styles.paragraph, {fontSize: fonte}]}> Página de Ajuda. </Animated.Text>

            <Text style={[Styles.text, {fontSize: 13}]}>Endereço: Close to nowhere.</Text>

            <Text style={[Styles.text, {fontSize: 15}]}>
                funcionamento: Segunda à Sexta de 10:00 - 12:00h.
            </Text>

            <Text style={[Styles.text, {fontSize: 15}]}>
                contato: (xx)xxxxxxxx.
            </Text>

            <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Home"
                action={() => navigation.goBack()}
            />
            <Text style={[Styles.text, {fontSize: 15}]}>
               Repositório do Projeto.
            </Text>
            <Botao style={Styles.botao}
                cor={colors.botaoAzul}
                label="GitHub"
                action={() => { 
        Linking.openURL('https://github.com/igordiasf/ex.git');}}
            />
        </View>
    );
}

export default Ajuda;

