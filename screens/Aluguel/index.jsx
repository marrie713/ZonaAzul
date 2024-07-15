import { View, Text, TextInput } from "react-native";
import { StyleAluguel } from "./style";
import ButtonDarkExample from "../../components/dropdawn";

export default function Aluguel(){
    return(
        <View style={StyleAluguel.root}>
            <View style={StyleAluguel.card}>
                
                <TextInput
                style={StyleAluguel.input}
                placeholder="Telefone"/>
            </View>
        </View>
    )
}