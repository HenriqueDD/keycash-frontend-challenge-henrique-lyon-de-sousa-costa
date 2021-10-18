import React, {Component} from "react";
import {View, Text,  StyleSheet, Image} from 'react-native';


class Imoveis extends Component {
    render(){
        return(
            <View style={styles.containerArray}>
                

                <Text>Endereço: {this.props.data.address.formattedAddress}</Text>
                <Text>Imagens: {this.props.data.images} </Text>
                <Text>Preço: {this.props.data.price}</Text>
                <Text>Banheiros: {this.props.data.bathrooms}</Text>
                <Text>Quartos: {this.props.data.bedrooms}</Text>
                <Text>Vagas:{this.props.data.parkingSpaces}</Text>
                <Text>Área: {this.props.data.usableArea}</Text>
                
            </View>
        )
    }
}
export default Imoveis

const styles = StyleSheet.create({
    containerArray:{
        padding: 15
    }
})
