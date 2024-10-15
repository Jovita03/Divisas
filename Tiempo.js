import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class Tiempo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //aqui van las variables
      temperatura:"20",
      imagenTemp:"",
      bandera:1,
      humedad:"20",
      ciudad:"",
    };
  }

  render() {
    const busca= () =>{
      let _this= this;
      var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //console.log (xhttp.responseText);
       var datos =JSON.parse(xhttp.responseText);
       console.log (datos.current.tem_c)   
      _this.setState({temperatura:datos.current.temp_c});
      _this.setState({imagenTemp:datos.current.condition.icon})
      _this.setState({bandera:0});
      _this.setState({humedad:datos.current.humidity});
      }
};
xhttp.open("GET", "http://api.weatherapi.com/v1/forecast.json?key=c5a833f8a1f043cb9a1123749241009&q="+this.state.ciudad+"&days=5&aqi=no&alerts=no", true);
xhttp.send();
    }
    return (
      <View>
        <Text style={{ fontSize: 45, textAlign: "center", color: "grey" }}>Clima App</Text>
        <View
          style={{
            borderRadius: 15,
            borderColor: "pink",
            borderWidth: 2,
            width: 200,
            marginLeft: 100,
            marginTop: 40,
            backgroundColor: "white",
          }}
        >
          <View style={{ width: 150 }}>
            <TextInput />
          </View>
          <View style={{ marginLeft: 165, marginTop: -35 }}>
            <TouchableOpacity onPress={busca}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("./Imagenes/luupa.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {/* Caja contenedora de cosas */}
          <View>
            {this.state.bandera?
            <Image
              style={{ width: 340, height: 200, marginTop: 20, marginLeft: 30 }}
              source={require("./Imagenes/nube.png")}/>
              :
            <Image
              style={{ width: 340, height: 200, marginTop: 20, marginLeft: 30 }}
              source={{uri:("http://"+this.state.imagenTemp)}}></Image>
             } 
          </View>
          <View style={{ marginTop: -100, marginLeft: 155 }}>
            <Text style={{ fontSize: 60,}}>{this.state.temperatura}°</Text>
          </View>
          
          <View style={{ marginTop: 70, marginLeft: 20 }}>
            <Image
              style={{ width: 50, height: 40, marginTop: 20, marginLeft: 0 }}
              source={require("./Imagenes/lluvianu.png")}
            />
          </View>
          <View style={{ marginLeft: 90, marginTop: -20 }}>
            <Text style={{ fontSize: 18, color: "black" }}>80%</Text>
          </View>
      
          <View style={{ marginTop: 20 }}>
            <Image
              style={{ width: 50, height: 40, marginTop: 20, marginLeft: 20 }}
              source={require("./Imagenes/viento.png")}
            />
          </View>
          <View style={{ marginLeft: 90, marginTop: -20 }}>
            <Text style={{ fontSize: 18, color: "black" }}>80%</Text>
          </View>
        </View>
        <ScrollView horizontal>
          <View>
            <View
              style={{
                borderWidth: 3,
                width: 150,
                height: 150,
                borderColor: "pink",
                borderRadius: 15,
                marginLeft: 20,
                marginTop: 40,
              }}
            >
              <Image
                source={require("./Imagenes/nube.png")}
                style={{ width: 128, height: 80, marginLeft: 9 }}
              />
              <Text style={{ marginTop: -50, marginLeft: 55, fontSize: 25 }}>32°</Text>
              <Image
                style={{ width: 50, height: 40, marginTop: 33, marginLeft: 15 }}
                source={require("./Imagenes/lluvianu.png")}
              />
              <Text style={{ marginLeft: 30 }}>80%</Text>
              <Image
                source={require("./Imagenes/viento.png")}
                style={{ width: 43, height: 43, marginTop: -60, marginLeft: 80 }}
              />
              <Text style={{ marginLeft: 90 }}>30km</Text>
            </View>
            <View
              style={{
                borderWidth: 3,
                width: 150,
                height: 150,
                borderColor: "pink",
                borderRadius: 15,
                marginLeft: 200,
                marginTop: -150,
              }}
            >
              <Image
                source={require("./Imagenes/nube.png")}
                style={{ width: 128, height: 80, marginLeft: 9 }}
              />
              <Text style={{ marginTop: -50, marginLeft: 55, fontSize: 25 }}>32°</Text>
              <Image
                style={{ width: 50, height: 40, marginTop: 33, marginLeft: 15 }}
                source={require("./Imagenes/lluvianu.png")}
              />
              <Text style={{ marginLeft: 30 }}>80%</Text>
              <Image
                source={require("./Imagenes/viento.png")}
                style={{ width: 43, height: 43, marginTop: -60, marginLeft: 80 }}
              />
              <Text style={{ marginLeft: 90 }}>30km</Text>
            </View>
            <View
              style={{
                borderWidth: 3,
                width: 150,
                height: 150,
                borderColor: "pink",
                borderRadius: 15,
                marginLeft: 380,
                marginTop: -150,
              }}
            >
              <Image
                source={require("./Imagenes/nube.png")}
                style={{ width: 128, height: 80, marginLeft: 9 }}
              />
              <Text style={{ marginTop: -50, marginLeft: 55, fontSize: 25 }}>32°</Text>
              <Image
                style={{ width: 50, height: 40, marginTop: 33, marginLeft: 15 }}
                source={require("./Imagenes/lluvianu.png")}
              />
              <Text style={{ marginLeft: 30 }}>80%</Text>
              <Image
                source={require("./Imagenes/viento.png")}
                style={{ width: 43, height: 43, marginTop: -60, marginLeft: 80 }}
              />
              <Text style={{ marginLeft: 90 }}>30km</Text>
            </View>
            <View
              style={{
                borderWidth: 3,
                width: 150,
                height: 150,
                borderColor: "pink",
                borderRadius: 15,
                marginLeft: 560,
                marginTop: -150,
              }}
            >
              <Image
                source={require("./Imagenes/nube.png")}
                style={{ width: 128, height: 80, marginLeft: 9 }}
              />
              <Text style={{ marginTop: -50, marginLeft: 55, fontSize: 25 }}>32°</Text>
              <Image
                style={{ width: 50, height: 40, marginTop: 33, marginLeft: 15 }}
                source={require("./Imagenes/lluvianu.png")}
              />
              <Text style={{ marginLeft: 30 }}>80%</Text>
              <Image
                source={require("./Imagenes/viento.png")}
                style={{ width: 43, height: 43, marginTop: -60, marginLeft: 80 }}
              />
              <Text style={{ marginLeft: 90 }}>30km</Text>
            </View>
            <View
              style={{
                borderWidth: 3,
                width: 150,
                height: 150,
                borderColor: "pink",
                borderRadius: 15,
                marginLeft: 740,
                marginTop: -150,
              }}
            >
              <Image
                source={require("./Imagenes/nube.png")}
                style={{ width: 128, height: 80, marginLeft: 9 }}
              />
              <Text style={{ marginTop: -50, marginLeft: 55, fontSize: 25 }}>32°</Text>
              <Image
                style={{ width: 50, height: 40, marginTop: 33, marginLeft: 15 }}
                source={require("./Imagenes/lluvianu.png")}
              />
              <Text style={{ marginLeft: 30 }}>80%</Text>
              <Image
                source={require("./Imagenes/viento.png")}
                style={{ width: 43, height: 43, marginTop: -60, marginLeft: 80 }}
              />
              <Text style={{ marginLeft: 90 }}>30km</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
