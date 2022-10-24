import * as React from 'react';
import { Text, View, Animated } from 'react-native';
import Styles from '../Styles';
import { useState } from 'react';
import { tamanhos } from '../Tamanhos';
import { Botao } from '../Botao';
import { colors } from '../Colors';
import { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { auth } from './Config/FirebaseConfig';
import {onAuthStateChanged} from "firebase/auth";


const Home = ({navigation}) => {

  const Logoff = () => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            
            const uid = user.uid;
            navigation.navigate("Login")

        } else {
          alert ("Erro!")
           
        }
    });

}

const modalizeRef = useRef(null);

  const openModalize = () => {
      modalizeRef.current?.open();
  };

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  

  const [altura] = useState(new Animated.Value(15));
  const [largura] = useState(new Animated.Value(10));
  const [banner] = useState (new Animated.Value(30));
  const [alturaTower] = useState(new Animated.Value(20));
  const [larguraTower] = useState(new Animated.Value(20));

    Animated.timing(largura, {
        toValue: tamanhos.padraoLargura,
        duration: 2800,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAlturaHome,
        duration: 2800,
    }).start();

    Animated.timing(larguraTower, {
        toValue: tamanhos.padraoGigante,
        duration: 2800,
    }).start();

    Animated.timing(alturaTower, {
        toValue: tamanhos.padraoAlturaCadastro,
        duration: 2800,
    }).start();

    Animated.loop(Animated.sequence([Animated.decay(banner,{ velocity:0.5, deceleration:0.999, toValue:tamanhos.padraoAlturaHome})])).start();
    

  return (
      <View style={Styles.container}>

        <Text style={Styles.paragraph}>Bem vindo ao Goliath National Bank!</Text>
        <Animated.Image source={require("../../assets/ticket-icon.png")}
                            style={{alignSelf: 'center', width: largura, height: altura, marginBottom: 10, marginTop: 10}}
        />

        <Botao style={Styles.botao}
                cor={colors.botaoCinza}
                label="Info"
                action={openModalize}
        />
        
        <Modalize
        ref={modalizeRef}
          snapPoint={480}
          modalHeight={700}>
        <View style={Styles.viewModalize}>
          <Animated.Text style={Styles.paragraph}>Ingresso Show </Animated.Text>
          <Text style={Styles.fraseText}>
            1. Temos os melhores shows.<br></br>
            ---------------------------------------<br></br>
            2. Diversao garantida.<br></br>
            ---------------------------------------<br></br>
            3. Segurança.<br></br>
            ---------------------------------------<br></br>          
             
          </Text>
          <Botao style={Styles.botao}
                cor={colors.botaoCinza}
                label="Fechar"
                action={closeModalize}
          />   
        </View>
      </Modalize> 

        <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Abrir Conta"
                action={() => navigation.navigate("Conta")}
        />

        <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Logoff"
                action={Logoff}
        />
        <Animated.Image source={require("../../assets/ticket-icon.png")}
                            style={{alignSelf: 'center', width: larguraTower, height: alturaTower, marginBottom: 12, marginTop: 12}}
        />
      
      </View>
    );
}

export default Home;

