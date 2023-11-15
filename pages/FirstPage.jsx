import {View, Text, StyleSheet, Button} from "react-native"

export default function FirstPage({navigation}){


  return(
    <View style={styles.container}>
      <Text style={styles.text}> Primeira página
      </Text>
      <Button 
        title="Ir para a segunda página" 
        onPress={()=> navigation.navigate("SecondPage")}
        color="#f4511e"
        />
    </View>
  )
}

let styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    fontWeight: 'bold',
  }
})