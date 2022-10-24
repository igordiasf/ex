import {StyleSheet} from 'react-native';

export default StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gray',
        padding: 8,
    },

    paragraph: {
        margin: 25,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
    },

    imagem: {
        height: 280,
        width: 100,
        alignSelf: "center",
    },

    botao: {
        width: 200,
        height: 40,
        alignSelf: 'center',
    },

   input: {
        height: 45,
        margin: 15,
        width: 320,
        borderWidth: 1,
        padding: 12,
        alignSelf: 'center',
    },

    text: {
        margin: 25,
        fontSize: 43,
        fontWeight: 'bold',
        textAlign: 'center',

    },

    slider: {
        width:280,
        height:50,
        alignSelf:'center'
    },

    switch:{
        true:"#A9A9A9",
        false: "#A9A9A9",
        ativado:"#808080",
        desativado:"#808080",
        alignSelf:"center"
    },
    label:{

        fontSize: 20,
        marginLeft:'525px'

    },
    touch: {
        alignItems: "center",
        backgroundColor: "#808080",
        padding: 12,
        width: 280,
        height: 50,
        alignSelf:"center"
    }
});