
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Aluguel from "./screens/Aluguel";
import Comprovante from "./screens/comprovante";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{headerTitle: 'Login', headerStyle: {backgroundColor: '#1c1c2b'}, headerTitleStyle: { color: '#fff'} }}/>
        <Stack.Screen name="Aluguel" component={Aluguel} options={{headerTitle: 'Aluguel', headerStyle: {backgroundColor: '#71717d'}, headerTitleStyle: { color: '#fff'} }}/>
        <Stack.Screen name="Comprovante" component={Comprovante} options={{headerTitle: 'Voltar', headerStyle: {backgroundColor: '#71717d'}, headerTitleStyle: { color: '#fff'} }}/>
      </Stack.Navigator>
    </NavigationContainer>
)}