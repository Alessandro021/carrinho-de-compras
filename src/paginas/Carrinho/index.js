import { View, Text, FlatList} from 'react-native';
import styles from './styles.js'
import {useContext} from "react";
import { CarrinhoContext } from '../../context/CarrinhoContext.js'
import ItensDoCarrinho from '../../components/ItensDoCarrinho/index.js';

export default function Carrinho(){

    const { carrinho, adicionarItemNoCarrinho, removerItemDoCarrinho, total} = useContext(CarrinhoContext)
return(
    <View style={styles.container}>
        <FlatList 
            data={carrinho}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={() => <Text>Nenhum item no carrinho...</Text>}
            renderItem={({item}) => (
            <ItensDoCarrinho  data={item} 
            adicionarQuantidade={ () => adicionarItemNoCarrinho(item)}
            removerQuantidade= {() => removerItemDoCarrinho(item)}
            />)}
            ListFooterComponent={()=> total > 0 && <Text style={styles.total}>Total: R${total}</Text>}
            
        />
    </View>
)
}

