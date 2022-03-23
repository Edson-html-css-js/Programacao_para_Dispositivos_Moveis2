import  React from 'react';
import { Text, View, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Principal = () => {
  return (

 <NavigationContainer>
 <Tab.Navigator>
 <Tab.Screen name="Cadastrar" component={Tela1}/>
 <Tab.Screen name="Listar" component={Tela2}/>
  </Tab.Navigator>
 </NavigationContainer>
  );

}
     const Tela1 = () => {
      return (
        <View> 
        <Text></Text>

         <Text>Nome:</Text>
        <TextInput/>  
              <Text> </Text>
              <Text>Telefone:</Text>
              <TextInput/>  
                   <Text></Text>
                    <Text>        </Text>
                        <Text>        </Text>
                   <Button title='Salvar'/>
          
         
        </View>
      );
    }

    const Tela2 = () => {
      return (
        <View> 
        <Text>EDSON LUCAS</Text>
        <Text>(11)93858-4465</Text>

         <Text>        </Text>

          <Text>Maria Eugenia</Text>
        <Text>(11)93858-4465</Text>

           <Text>        </Text>

          <Text>Lucas Nicolas</Text>
        <Text>(11)93858-4465</Text>

        </View>
      );
    }
  

export default Principal;
