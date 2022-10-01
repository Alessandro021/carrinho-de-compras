import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },
    preco:{
        fontSize: 16,
    },
    containerQuantidade:{
        marginVertical: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    botaoAdicionar:{
        backgroundColor: '#168FFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 25
    },
    quantidade:{
        marginHorizontal: 15,
        fontSize: 20
    }
})

export default styles;