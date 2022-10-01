import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingEnd: 15,
        paddingStart: 15
    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    carrinhoContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        marginTop: 24
    },
    quantidade:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000',
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 10, //  FORÇA ELE APARECER POR CIMA DO ICONE
        bottom: -2,
        left: -5
    },
    quantidadeTexto:{
        fontSize: 12,
        color: '#FFF'
    },
    carrinhoBotao:{

    },
    lista:{
        
    }
})
export default styles;