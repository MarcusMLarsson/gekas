import React from 'react';
import {  View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import ShopScreen from './ShopScreen';


const TabNavigator = createMaterialBottomTabNavigator(
  { 
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },

       Map: {
      screen: MapScreen,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]} size={25} name={'ios-map'} />
          </View>
        ),
       
      },
    },


    Shop: {
        screen: ShopScreen,
        navigationOptions: {
          tabBarLabel: 'Shop',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon
                style={[{ color: tintColor }]} size={25} name={'ios-cart'} />
            </View>
          ),
         
        },
      },


  },

     
  {
    initialRouteName: 'Home',
    activeColor: 'gray',
    inactiveColor: 'darkgray',
    barStyle: { backgroundColor: '#fff' },
  }
);

export default createAppContainer(TabNavigator);





