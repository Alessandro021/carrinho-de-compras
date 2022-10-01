import { useState, useContext} from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles.js'
import Produto from '../../components/Produto/index.js';
import {useNavigation} from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'
import {CarrinhoContext} from '../../context/CarrinhoContext.js';

export default function Home(){

    const { carrinho,adicionarItemNoCarrinho } = useContext(CarrinhoContext);
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

    function handleAdicionarAoCarrinho(item){
        adicionarItemNoCarrinho(item)
    }
return(
    <SafeAreaView style={styles.container}>
        <View style={styles.carrinhoContent}>
             <Text style={styles.titulo}>Lista de Produtos</Text>
             <TouchableOpacity style={styles.carrinhoBotao}
                onPress={() => navigation.navigate('Carrinho')}
             >
                {carrinho.length >= 1 && (
                    <View style={styles.quantidade}>
                        <Text style={styles.quantidadeTexto}>{carrinho?.length}</Text>
                    </View>
                )}
                <Feather  name='shopping-cart' size={30} color='#008000'/>
             </TouchableOpacity>
        </View>

        <FlatList style={styles.lista}
            data={produtos}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <Produto data={item} adicionarAoCarrinho={() => handleAdicionarAoCarrinho(item)}/>}
        />
    </SafeAreaView>
)
}