import * as React from 'react';
import { useState, useRef } from 'react';
import { Text, View, Animated, Image } from 'react-native';
import Input from "../Input";
import Botao from "../Botao";
import Home from "./Home";
import Styles from "../Styles";
import { colors } from "../Colors";
import { tamanhos } from '../Tamanhos';
import {useIsFocused} from '@react-navigation/native';
import {auth} from './Config/FirebaseConfig';
import {signInWithEmailAndPassword } from "firebase/auth";


const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [altura] = useState(new Animated.Value(20));
    const [largura] = useState(new Animated.Value(20));
    const [banner] = useState (new Animated.Value(50));
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            setEmail("")
            setSenha("")      
        }
    }, [isFocused])

  const Logar = ()=>{    

    if (email != "" && senha != "") {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                
                const user = userCredential.user;
                navigation.navigate("Home")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert("Email ou Senha invalidos, tente novamente!")
            });

    } else {
        alert("Digite seu email e senha cadastrados!")
    }
    }    

    Animated.timing(largura, {
        toValue: tamanhos.padraoLarguraCadastro,
        duration: 2800,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAlturaCadastro,
        duration: 2800,
    }).start();

    Animated.loop(Animated.sequence([Animated.decay(banner,{ velocity:0.5, deceleration:0.997})])).start();

    return (
        
        <View style={Styles.container}>

          <Text style={Styles.paragraph}>Bem Vindo ao Goliath National Bank</Text>
            
            <Animated.Image source={require("../../assets/ticket-icon.png")}
                            style={{alignSelf: 'center', width: largura, height: altura, backgroundColor: 'red', marginBottom: 12,                        marginTop: 12}}
            />
            
            <Input style={Styles.Input}            
                placeholder="Usuário"
                onChangeText={setEmail}
                value={email}
            />
            <Input style={Styles.Input}
                placeholder="Senha"
                onChangeText={setSenha}
                value={senha}
                secure="true"
            />
            <Botao style={Styles.botao}
                cor={colors.botaoAzul}
                label="Entrar"
                action={Logar}
            />
            <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Cadastrar"
                action={() => navigation.navigate("Cadastro")}
            />
            <Image source={require('../../assets/ticket-icon.png')} style={{ flexDirection:"columns", height:100, width:280,                         marginTop: 12}}> 
            </Image>
        </View>
    );
}

export default Login;

