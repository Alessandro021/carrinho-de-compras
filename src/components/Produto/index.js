import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Feather} from '@expo/vector-icons'

export default function Produto({ data, adicionarAoCarrinho }) {
 return (
   <View style={styles.container}>
    <View>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Text style={styles.preco}>R$ {data.preco}</Text>
    </View>
    <TouchableOpacity style={styles.botaoAdicionar}
      onPress={adicionarAoCarrinho}
    >
        <Feather name='plus' size={24} color='#FFF' />
    </TouchableOpacity>
   </View>
  );
}