import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 14,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titulo:{
        fontWeight: 'bold'
    },
    botaoAdicionar:{
        backgroundColor: '#168FFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 25
    }
})

export default styles;