import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Register extends React.Component{

    render(){
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                
               <FontAwesome5 name="user-plus" size={60} color="black" style={{   flexDirection:"row",
                   
                    marginHorizontal:150,
                   
                    marginTop:70,
                    paddingHorizontal:10,}}/>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                <TextInput 
                        placeholder="Username"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />

                </View>
               
                <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginHorizontal:55,
                   borderWidth:2,
                   marginTop:15,
                   paddingHorizontal:10,
                   borderColor:"#00716F",
                   borderRadius:23,
                   paddingVertical:2
                }}>
                    
                  
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />


                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        
                    }}>Register</Text>
                </View>
              
            </View>
        )
    }
}