import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/telas/home.jsx";
import CortesScreen from "./src/telas/cortes.jsx";
import CarrinhoScreen from "./src/telas/carrinho.jsx";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela inicial">
        <Stack.Screen name="Tela inicial" component={HomeScreen} />
         <Stack.Screen name="Cortes" component={CortesScreen} />
         <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

