import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from "react-native";

let imgServer="https://image.tmdb.org/t/p/w500";

let widthScreen = Dimensions.get("window").width;
let heightScreen = Dimensions.get("window").height;

export default function ElencoItem({item}){
  return(
    <View style={styles.container}>
      <View>
        <Image 
      source={{uri: imgServer + item.profile_path}} 
      style={styles.poster}/>
      </View>
      
      <View style={styles.containerFilho}>
        <Text style={styles.title}>Personagem: {item.character}</Text>
        <Text style={styles.title}>Ator: {item.name}</Text>
        <Text style={styles.text}>Popularidade: {item.popularity}</Text>
      </View>
      
      
    </View>
  
   
  )
}

let widthPoster = (widthScreen -32 -24)/3

let styles = StyleSheet.create({
  container:{
    backgroundColor: 'white', 
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  containerFilho:{
    flex: 1,
    justifyContent:'center',
    padding: 4
  },

  title:{
    fontSize:18,
    fontWeight: 'bold',
    marginBottom: 10  
  },
  text:{
    fontSize:14,
    fontWeight: 'bold',
    marginBottom: 10  
  },
  poster:{
    borderRadius: 20,
    margin: 8, 
    width: widthPoster,
    height:widthPoster*1.5
  }
})