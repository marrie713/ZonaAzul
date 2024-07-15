import { View, Text, Image, StatusBar, TextInput, Pressable} from "react-native";
import { Homestyle } from "./style";

export default function Home(){
    return(
    
        <View style={Homestyle.root}>
            <StatusBar/>
            <View style={Homestyle.Logo}>
                <Image source={require('../../assets/Logo.png')}style={{height:70, width: 230}}/>
                <Text style={Homestyle.Titulo}> Aluguel de Carros </Text>
            </View>

                <View style={Homestyle.card}>
                    <Text style={Homestyle.TituloLogin}>Login</Text>

                    <TextInput
                    style={Homestyle.input}
                    placeholder="Usuário"/>
                    <TextInput
                    style={Homestyle.input}
                    placeholder="Senha"/>

                    <Pressable style={Homestyle.button}>
                        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Começar</Text>
                    </Pressable>
                </View>
            
        </View>
    )
}