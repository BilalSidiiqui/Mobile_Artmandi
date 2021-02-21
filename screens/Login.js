import React from 'react';
import {Text,View,Image, StyleSheet,Button, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

 class Login extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }
      
      onLogin() {
        const { username, password } = this.state;
    
        Alert.alert('Credentials', `${username} + ${password}`);
      }
    
      render() {
        return (
          <View style={styles.container}>
            <FontAwesome name="users" size={60} color="black" />
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              
              placeholderTextColor="#00716F"
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              
              placeholderTextColor="#00716F"
              secureTextEntry={true}
              style={styles.input}
            />
            
            <Button
              title={'Login'}
              style={styles.input}
              onPress={this.onLogin.bind(this)}
            />
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      input: {
        paddingHorizontal:10
    
      },
    });
    
export default Login;