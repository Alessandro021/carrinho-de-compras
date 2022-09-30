import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Rotas from './src/rotas';

/**
 * estalação de bibliotecas
 * npx expo install @react-navigation/native
 * npx expo install react-native-screens react-native-safe-area-context
 * npx expo install @react-navigation/native-stack
 */

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content"/>
      <Rotas />
    </NavigationContainer>
  );
}
