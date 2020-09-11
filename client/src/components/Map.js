import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 57.13358228,
        longitude: 12.714334399999984,
        latitudeDelta: 0.0026,
        longitudeDelta: 0.0027
      }}
    >

    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map