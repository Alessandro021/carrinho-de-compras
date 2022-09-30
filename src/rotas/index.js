import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../paginas/Home'
import Carrinho from '../paginas/Carrinho'

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false // REMOVE O HEADER 'HOME' DA PAGINA.
                }}
            />

            <Stack.Screen
                name='Carrinho'
                component={Carrinho}
                options={{
                    headerTitle: ' Meu Carrinho' // MUDANDO O NOME DO HEADER 'CARRINHO' PARA 'MEU CARRINHO' 
                }}
            />
        </Stack.Navigator>
    )
}