import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  Platform
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import TabNavigator from './components/Navigator';


export default function App() {
  return (
    <TabNavigator/>
    
  ); 
}

const topbarstyle = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#0057b8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const imagestyle = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const timebarstyle = StyleSheet.create({
  container: {
    flex: 0.08,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

const servicestyle = StyleSheet.create({
  container: {
    flex: 0.08,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});


const paragraphstyle = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#fff',
    textAlignVertical: 'center',
    //marginLeft: 30,
    //marginRight: 30,
  },
});




const containerstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});


