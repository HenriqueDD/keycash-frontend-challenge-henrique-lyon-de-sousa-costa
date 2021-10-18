import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import api from './src/services/api';
import Imoveis from './src/pages/Imoveis';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      imoveis: []
    }
  }

  
  
  async componentDidMount(){
    const response = await api.get('http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge')
    this.setState({
      imoveis: response.data
    })
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.inputBusca}>
          <TextInput
          placeholder= "Digite seu filtro"
          

          />

        </View>
                <View>
                    <TouchableOpacity style={styles.botaoBusca} >
                        <Text style={styles.textoBotao} >Buscar</Text>
                    </TouchableOpacity>
                </View>
        <FlatList 
        data={this.state.imoveis}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Imoveis data={item} />}
        
        />
      </SafeAreaView>
    )
  }
  
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },

  botaoBusca:{
    alignItems: 'center',
    backgroundColor: "#ff0094",
    padding: 10,
    marginBottom: 40,
    borderRadius: 20,
    margin: 20
    
},
  inputBusca: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#bfbfbf",
        borderRadius: 20,
        marginBottom: 20,
        margin: 50
  },

  textoBotao:{
    color: "#FFFFFF"
  }

})

