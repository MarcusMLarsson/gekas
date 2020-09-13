 
import React, {useState} from 'react';  
import {StyleSheet, Text, TextInput, Button, View,Image,Dimensions, FlatList} from 'react-native';
import axios from 'axios';

const serverUrl = 'http://192.168.68.108:5000/';
//const serverUrl = 'http://127.0.0.1:5000';
const http = axios.create({
    baseURL: serverUrl,
}); 

export default class ShopScreen extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
          input: '',
          messages: [],
         };
       }

    onLogin() {
        const { isLoggedIn, username } = this.state;
         if (!isLoggedIn) {
          http.post('/login', {username})
           .then(() => this.setState({isLoggedIn: true}))
           .catch((err) => console.log(err))
         }  
    }

    render() {
        const { messages, isLoggedIn } = this.state;
         return (
         <View style={styles.container}>
          <View>
          <Text>Login</Text>
          <TextInput
          onChangeText={(val) => this.setState({username: val})}
          />
         <Button title='Login' onPress={() => this.onLogin()} />
         <Text> Online Status: {isLoggedIn ? 'Online' : 'Offline'}</Text>
        </View>
       </View>
       );
       }
       }
 



 


const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
      });

//export default ShopScreen;


