import { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles.js'
import Produto from '../../components/Produto/index.js';
import {useNavigation} from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

export default function Home(){
    const navigation = useNavigation();
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
             <TouchableOpacity style={styles.carrinhoBotao}
                onPress={() => navigation.navigate('Carrinho')}
             >
                <View style={styles.quantidade}>
                    <Text style={styles.quantidadeTexto}>3</Text>
                </View>
                <Feather  name='shopping-cart' size={30} color='#000'/>
             </TouchableOpacity>
        </View>

        <FlatList style={styles.lista}
            data={produtos}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <Produto data={item}/>}
        />
    </SafeAreaView>
)
}