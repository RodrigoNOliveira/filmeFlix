import { View, Text, StyleSheet, FlatList} from "react-native";

import filmes from "../data/filmes.json"
import FilmeItem from "../components/FilmeItem.jsx"

export default function ListaFilmes({navigation}){

  function Item({item}){
    return(
      <FilmeItem item={item} navigation={navigation}/>
    )
  }



  return(
    <View style={styles.container}>
      <FlatList
      data={filmes}
      keyExtractor={item => item.id}
      renderItem={Item}
      numColumns={3}
      />
    </View>


  )
}

let styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 16
  },
  title:{
    fontSize:20,
    fontWeight: 'bold'
  }
})