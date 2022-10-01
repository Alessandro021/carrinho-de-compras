import React, {useState} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Feather} from '@expo/vector-icons'

export default function ItensDoCarrinho( { data, adicionarQuantidade, removerQuantidade }) {

    const [ quantidadeProduto, setQuantidadeProduto] = useState(data?.quantidade)

    function handleAumentar(){
        adicionarQuantidade()
        setQuantidadeProduto(item => item + 1)
    }

    function handleDiminuir(){
        removerQuantidade()

        if(quantidadeProduto == 0){
            setQuantidadeProduto(0)
            return
        }

        setQuantidadeProduto(item => item - 1)
    }
 return (
   <View style={styles.container}>
        <View>
            <Text style={styles.titulo}>{data.nome}</Text>
            <Text style={styles.preco}>R$ {data.preco}</Text>
        </View>

        <View style={styles.containerQuantidade}>
            <TouchableOpacity style={styles.botaoAdicionar}
                onPress={handleDiminuir}
            >
                <Feather name='minus' size={24} color='#000' />
            </TouchableOpacity>

            <Text style={styles.quantidade}>{quantidadeProduto}</Text>

            <TouchableOpacity style={styles.botaoAdicionar}
                onPress={handleAumentar}
            >
                <Feather name='plus' size={24} color='#000' />
            </TouchableOpacity>
        </View>
   </View>
  );
}