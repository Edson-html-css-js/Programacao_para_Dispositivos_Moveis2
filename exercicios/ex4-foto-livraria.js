import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import imagePet from './assets/livrariareact.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ListarPets = () => {
  return (
    <View>
      <Text></Text>
      <View style={estilos.pet}>
        <Text style={estilos.nomePet}></Text>
        <Text style={estilos.dadosPet}>O imbecil coletivo - O.Carvalho - R$ 9,90 </Text>
      </View>
      <View style={estilos.pet}>
        <Text style={estilos.nomePet}></Text>
        <Text style={estilos.dadosPet}>Pequeno principe- Du perry - R$ 34,50</Text>
      </View>      
       <View style={estilos.pet}>
        <Text style={estilos.nomePet}></Text>
        <Text style={estilos.dadosPet}>A real historia do real - F.H.C - R$ 25,50</Text>
      </View>      
       <View style={estilos.pet}>
        <Text style={estilos.nomePet}></Text>
        <Text style={estilos.dadosPet}>1984- George Wells - R$ 56,00</Text>
      </View>      
       <View style={estilos.pet}>
        <Text style={estilos.nomePet}></Text>
        <Text style={estilos.dadosPet}>A culpa é das estrelas - Jhon Green - r$ 35,80</Text>
      </View>      
    </View>
  )
}

const  CadastrarPet = () =>{
   return(
      <View>
       <Text>Titulo do Livro</Text>
        <TextInput placeholder="" style={estilos.input}/>
        <Text>Autor</Text>
        <TextInput placeholder="" style={estilos.input}/>
         <Text>preço</Text>
        <TextInput placeholder="" style={estilos.input}/>
        <TextInput placeholder="" style={estilos.input}/>
        <Button title="Gravar"/>
      </View>
    );
  }

export default function App() {
  return (
    <View style={estilos.principal}>
      <View style={estilos.cabecalho}>
        <ImageBackground source={imagePet} style={{ flex: 1 }}>
          <Text style={estilos.titulo}>        Livraria edsom       livros</Text>
        </ImageBackground>
      </View>
      <View style={estilos.conteudo}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name=""component={CadastrarPet}/>
          <Tab.Screen name="                               Livros" component={ListarPets}/>   
             
        </Tab.Navigator>
           <Button title="Recarregar Livros"/>
      </NavigationContainer>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  principal: { flex: 1 },
  cabecalho: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  conteudo: {
    flex: 2,
    backgroundColor: 'cyan',
  },
  titulo: {
    textAlign: 'center',
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    fontSize: 32,
    color: 'orange',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
  },
  nomePet: { 
    fontWeight: "bold",
  },
  dadosPet: { 
    color: "gray",
  },

  pet: {
    paddingLeft: 20,
    marginTop: 20,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "darkgray"
  },

  input: {
    marginTop: 30,
    paddingBottom: 5,
    borderBottomColor: 'darkgray',
    borderBottomWidth: 2
  }
});