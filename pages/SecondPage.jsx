import {View, Text, StyleSheet, Button} from "react-native"

export default function SecondPage({ navigation}){


  return(
    <View style={styles.container}>
      <Text  style={styles.text}> Segunda pagina
      </Text>
       <Button 
        title="Ir para a primeira página" 
        onPress={()=> navigation.navigate("FirstPage")}
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
    fontWeight: 'bold'
  }
})