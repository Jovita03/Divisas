import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput} from 'react-native';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //aqui se declaran las variables! ! 
      pesos:"",
      resultado:"",

    };
  }

  render() {
    //programacion de los objetos
    const dolares= () => {
  /*
  Aqui en comparacion a otros lenguajes no se puede hacer esto: a=pesos, se hace: a=this.state.pesos
  */
    var temp=this.state.pesos
    var conv= 0.051*temp
    this.setState({resultado:conv})
    }
     const euros = () => {
      var temp=this.state.pesos
      var conv = 0.046*temp
      this.setState({resultado:conv})
     } 
     
      const yenes= () => {
        var temp=this.state.pesos
        var conv = 0.036*temp
        this.setState({resultado:conv})
      }
      const libras= () => {
        var temp=this.state.pesos
        var conv = 0.020*temp
        this.setState({resultado:conv})
      }
    
    return (
      <View>
        <Text style={styles.Titulo}>Convertidor de Divisas</Text>
        <View style={{
          borderWidth:2,
          borderColor:"red",
          borderRadius:15,
          width:100,
          justifyContent:"center",
        }}>
            <TextInput
              placeholder='0000'
              keyboardType='numeric'
              onChangeText={pesos => this.setState({pesos})}/>

        </View>
        <View style={{
          marginTop:50,
        }}>
          <Text style={{
            fontSize:18,
            color:"black"

          }}>El resultado de la conversion es: {this.state.resultado} </Text>
        </View>
        <View style={{
          width:150,
          marginLeft:200,
          margintTop:20,
        }}>
          <Button title="Dolares" onPress={dolares}></Button>
          <Button title="Euros" onPress={euros}></Button>
          <Button title="Yenes" onPress={yenes}></Button>
          <Button title="Libras Esterlinas" onPress={libras}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Titulo:{
    fontSize:30,
    color:"pink",
    textAling:"center",
  }
})
