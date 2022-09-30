import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Rotas from './src/rotas';

import CarrinhoProvider from './src/context/CarrinhoContext';

/**
 * estalação de bibliotecas
 * npx expo install @react-navigation/native
 * npx expo install react-native-screens react-native-safe-area-context
 * npx expo install @react-navigation/native-stack
 */

export default function App() {
  return (
    <NavigationContainer>
      <CarrinhoProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content"/>
          <Rotas />
      </CarrinhoProvider>
    </NavigationContainer>
  );
}
