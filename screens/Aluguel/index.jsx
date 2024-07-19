import { View, TextInput, StatusBar, Text, Pressable } from "react-native";
import { StyleAluguel } from "./style";
import ButtonDarkExample from "../../components/dropdawn";
import { useNavigation } from '@react-navigation/native';

export default function Aluguel(){

    const navigation = useNavigation();

    return(
        <View style={StyleAluguel.root}>
            <StatusBar/>
            <View style={StyleAluguel.card}>
                <ButtonDarkExample/>
                <TextInput
                style={StyleAluguel.input}
                placeholder="Telefone"/>

                <Pressable style={StyleAluguel.button} onPress={()=> navigation.navigate("Comprovante")}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Começar</Text>
                </Pressable>
            
            </View>
        </View>
    )
}