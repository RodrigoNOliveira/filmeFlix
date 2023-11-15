import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from  "@react-navigation/stack";

import FirstPage from "./pages/FirstPage.jsx"
import SecondPage from "./pages/SecondPage.jsx"
import ListaFilmes from "./pages/ListaFilmes.jsx"
import Filme from "./pages/Filme.jsx"
import Elenco from "./pages/Elenco.jsx"





let Stack = createStackNavigator();

 export default function App() {
   return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaFilmes">
        <Stack.Screen 
          name="ListaFilmePage"
          component={ListaFilmes}
          options={{
            title:"FilmesFlix",
            headerStyle:{
              backgroundColor: "#f4511e"
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight: "bold"
            },
            headerIconColor:"#ff2"
          }}
        />

         <Stack.Screen 
          name="FilmePage"
          component={Filme}
          options={{
            title:"Filme",
            headerStyle:{
              backgroundColor: "#f4511e"
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight: "bold"
            },
            headerIconColor:"#ff2"
          }}
        />

   <Stack.Screen 
          name="ElencoPage"
          component={Elenco}
          options={{
            title:"Elenco",
            headerStyle:{
              backgroundColor: "#f4511e"
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight: "bold"
            },
            headerIconColor:"#ff2"
          }}
        />


          <Stack.Screen 
          name="FirstPage"
          component={FirstPage}
          options={{
            title:"Primeira Página",
            headerStyle:{
              backgroundColor: "#f4511e"
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight: "bold"
            },
            headerIconColor:"#ff2"
          }}
        />
          <Stack.Screen 
          name="SecondPage"
          component={SecondPage}
          options={{
            title:"Segunda Página",
            headerStyle:{
              backgroundColor: "#f4511e"
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight: "bold"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //  <SafeAreaView style={{flex:1}}>
    //     <FirstPage/>
    //  </SafeAreaView>
   )
 }
