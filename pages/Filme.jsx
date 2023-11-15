import {View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';


let imgServer="https://image.tmdb.org/t/p/w500";
let widthScreen = Dimensions.get("window").width;



export default function Filme({navigation, route}){
  let filme = route.params.filme;

  return(
    <ScrollView style={styles.container}>
      <View style={styles.containerPai}>
        <View style={styles.boxContainer}>
          <Image 
          source={{uri: imgServer + filme.poster_path}} 
          style={styles.poster}/> 
            <View style={styles.containerFilho}>
              <Text style={styles.title}>
              {filme.title}
              </Text> 
              <Text style={styles.star}>
              <AntDesign name="star" style={styles.star}/>
              {filme.vote_average}
              </Text>
              <Text style={styles.text}>Duração: {filme.runtime} minutos
              Popularidade: {filme.popularity}
              </Text>
               
            </View>
        </View>
        <Text style={styles.descript}>{filme.overview}</Text>
        
        <TouchableOpacity style={styles.botao} 
        onPress={()=> navigation.navigate("ElencoPage", {filme: filme})}>
          <Text style={styles.btn}> Elenco</Text>
       
        </TouchableOpacity>
      </View>
      
      
      
      
      
    </ScrollView>
  )
}

let widthPoster = (widthScreen -64 - 16)/2.5

let styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 16
  }, containerPai:{
    backgroundColor: 'white',
    borderRadius: 20,
    padding:16, 
    alignItems: 'center'
  },
  boxContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom: 32,
    paddingTop: 16
  }, star:{
    fontSize: 15,
    color: "#f4511e",
    padding: 8,
    fontWeight: 'bold',

  },
  containerFilho:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    padding: 16
  },
  descript:{
    fontSize:15,
    textAlign: 'justify',
    paddingBottom: 24

  },text:{
    fontSize:12,
    textAlign: 'auto'
  },
  poster:{
    width: widthPoster,
    height:widthPoster*1.5
  }, 
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }, 
  botao:{
    height: 40,
    width: 130,
    padding:10,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: "#f4511e",
    borderRadius: 20,
    color: "#f4511e"    
  }, 
  btn:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white"
  }
})



