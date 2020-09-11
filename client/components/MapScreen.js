 
import React, {useState} from 'react';  
import {StyleSheet, Text, TextInput, Button, View,Image,Dimensions} from 'react-native';
import MapView from 'react-native-maps';

var mapStyle = [
  {
      "featureType": "administrative.country",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "hue": "#ff0000"
          }
      ]
  }
];



 const MapScreen = props => {
   
 return (  
  <View style={styles.container}>
        <MapView
         style={styles.mapStyle} 
         region={{
          latitude: 57.13358228,
          longitude: 12.714334399999984,
          latitudeDelta: 0.0026,
          longitudeDelta: 0.0
        }}
        provider={MapView.PROVIDER_GOOLE}
        customMapStyle={mapStyle}
         />
      </View>
         
    );  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;


