import {View, Text, StyleSheet, FlatList} from "react-native"


import filmes from "../data/filmes.json"
import ElencoItem from "../components/ElencoItem.jsx"

export default function Elenco({ navigation, route}){
  let filme = route.params.filme;
  const elenco = filme.credits.cast;
function Item({item}){
    return(
      <ElencoItem item={item} navigation={navigation}/>
    )
  }



  return(
    <View style={styles.container}>
      <FlatList
      data={elenco}
      keyExtractor={item => item.name}
      renderItem={Item}
      numColumns={1}
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