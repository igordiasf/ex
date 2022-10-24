import {StyleSheet} from 'react-native';
import { colors } from './Colors';
import { tamanhos } from './Tamanhos';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    padding: tamanhos.padraoMinusculo,     
    margin: 0,  
    backgroundColor: '808080',    
    justifyContent: 'center',
  },
  itensContainer: {
    flexDirection: 'columns',
    padding: 15,
  },
  paragraph: {    
    marginBottom: 12,
    fontSize: tamanhos.padraoMedio,
    fontWeight: 'bold',    
    borderColor: '808080',
    textAlign: 'center',
    color: 'white',
  },
  frase: {
    width: 180, 
    height: 70, 
    marginTop: 5,
  },
  fraseText: {
    fontSize: tamanhos.padraoPequeno,
    fontWeight: 'bold',    
    borderColor: '#6A5ACD',
    textAlign: 'center',
    color: 'white',
  },
  imagem: {
    height: 280,
    width: 280,
    alignSelf: 'center',
  },
  text: {
        margin: 25,
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
  botao: {
    width: 200,  
    alignSelf: 'center',
    padding: tamanhos.padraoMinusculo,
    marginBottom: 5,
  },
  input: {
    height: 30, 
    width: 200,
    borderColor: "gray", 
    borderWidth: 1,     
    marginBottom: 10,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  slider: {
      width: 240, 
      height: 30,
      size: 20,
      color:"#6A5ACD" ,     
  },
  switchAdjust: {
    marginBottom: 20,
  },
  fadingContainer: {
    padding: 10,
    backgroundColor: "red", 
    width: 280,
    marginBottom: 10, 
    marginTop: 10,
  },
  fadingText: {
    marginBottom: 10,
    fontSize: tamanhos.padraoDescricao,    
    color: 'white'    
  },
  buttonRow: {
    flexBasis: 50,
    justifyContent: "space-evenly",
    marginVertical: 10,
    marginBottom: 5,
  }, 
    label:{
        fontSize: 16,
        marginLeft:'525px',
        alignItems: 'center',
        textAlign: 'center',
    },
    touch: {
        alignItems: "center",
        backgroundColor: "#6A5ACD",
        padding: 12,
        width: 180,
        height: 50,
        alignSelf:"center"
    },
    viewModalize: {
        flex: 1,
        margin: 8,
        backgroundColor: 'lightblue',
        shadowColor: 'black',
  },
      buttonModalize: {
        alignItems: 'center',
        backgroundColor: "brown",
        padding: 10,
        margin: 15, color: 'white',
        borderRadius: 2
  }
});