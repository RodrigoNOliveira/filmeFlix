import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from "react-native";

let imgServer="https://image.tmdb.org/t/p/w500";

let widthScreen = Dimensions.get("window").width;
let heightScreen = Dimensions.get("window").height;

export default function FilmeItem({item, navigation}){
  return(
    <TouchableOpacity style={styles.container}
    onPress={()=> navigation.navigate("FilmePage", {filme: item})}
    >
    <Image 
      source={{uri: imgServer + item.poster_path}} 
      style={styles.poster}/>
      <Text style={styles.title}>{item.title}</Text>
      
    </TouchableOpacity>
  )
}

let widthPoster = (widthScreen -32 -24)/3

let styles = StyleSheet.create({
  container:{
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 16
  },
  title:{
    paddingTop: 8,
    fontSize:12,
    fontWeight: 'bold', 
    textAlign: 'center',
    width: widthPoster,
  },
  poster:{
    width: widthPoster,
    height:widthPoster*1.5
  }
})