 
import React, {useState} from 'react';  
import {StyleSheet, Text, TextInput, Button, View,Image,Dimensions} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MapScreen1 from '../src/screens/MapScreen1'
import MapListScreen from '../src/screens/MapListScreen'
import { setNavigator } from '../src/navigationRef'

const switchNavigator = createSwitchNavigator({
    mainFlow: createBottomTabNavigator({
      MapView: MapScreen1,
      MapList: MapListScreen
    })
  })

const App1 = createAppContainer(switchNavigator)

const MapScreen = props => {
   
 return (  
    <App1 
    ref={navigator => {
      setNavigator(navigator)
    }}
  />
    );  
}


const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
         flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center'  
    },  


});  

export default MapScreen;


