import { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles.js'

import { Feather } from '@expo/vector-icons'

export default function Home(){
    const [produtos, setProdutos] = useState([
        {
            id: '1',
            nome: 'Coca cola',
            preco: 9.90
        },
        {
            id: '2',
            nome: 'Chocolate',
            preco: 6.50
        },
        {
            id: '3',
            nome: 'Queijo',
            preco: 15
        },
        {
            id: '4',
            nome: 'Batata frita',
            preco: 9.90
        },
        {
            id: '5',
            nome: 'Guarana lata',
            preco: 9.90
        },
        {
            id: '6',
            nome: 'Iorgute',
            preco: 4.50
        },

    ])
return(
    <SafeAreaView style={styles.container}>
        <View style={styles.carrinhoContent}>
             <Text style={styles.titulo}>Lista de Produtos</Text>
             <TouchableOpacity style={styles.carrinhoBotao}>
                <View style={styles.quantidade}>
                    <Text style={styles.quantidadeTexto}>3</Text>
                </View>
                <Feather  name='shopping-cart' size={30} color='#000'/>
             </TouchableOpacity>
        </View>
    </SafeAreaView>
)
}