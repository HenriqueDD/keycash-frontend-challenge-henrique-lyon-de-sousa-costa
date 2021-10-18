import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity , View, TextInput, SafeAreaView, ProgressViewIOSComponent} from "react-native";
import axios from 'axios';

export const Vitrine  = () =>{
    
    const [infoImovel, setInfoImovel] = useState({});
    const [searchImovel, setSearchImovel] = useState('');

    const getImovel = async () => {
    const data = await axios.get('https://5e148887bce1d10014baea80.mockapi.io/keycash/challenge') 
    setInfoImovel(data)
};

    return(
        <SafeAreaView>
            <View style={styles.containerBusca}>
                <TextInput
                    placeholder='Pesquisar Imóvel'
                    value={searchImovel}
                    onChangeText={text => setSearchImovel(text)}
                />
                <TouchableOpacity style={styles.botaoBusca} onPress={getImovel} >
                    <Text >Buscar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.textoCampos}>Endereço: {infoImovel.bedrooms}</Text>
            </View>
            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
      },

    botaoBusca: {
        alignItems: 'center',
        backgroundColor: "#DDDDDD",
        padding: 10
    },

    containerBusca:{
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textoCampos: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    }

    
})