import React from 'react'
import { ImageBackground, View,Text, StyleSheet,Button } from 'react-native';
const image = { uri: "https://papers.co/wallpaper/papers.co-nq33-space-galaxy-star-nature-dark-4-wallpaper.jpg" };



export default function Onload({navigation}) {

    const presshandlerOnload=()=>{
        navigation.navigate('HOME')
    }
    
    return (
        <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>ARTMANDI</Text>
      <Button title="Getting started" onPress={presshandlerOnload}/>
    </ImageBackground>
  </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});