import React from 'react'
import { Text, View,Button } from 'react-native'

export default function Home({navigation}) {

    const presshandler=()=>{
        navigation.navigate('SIGNUP')
    }
   const presshandlerlogin =()=>{
        navigation.navigate('LOGIN')
    }
    
    return (
        <View>
            <Text>Hello Home</Text>
            <Button title='SignUp' onPress={presshandler}/>
            <Button title='LOGIN' onPress={presshandlerlogin}/>
           
            
        </View>
    )
}
