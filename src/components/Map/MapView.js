import React from 'react'
import {StyleSheet} from 'react-native'
import Map, {Marker} from 'react-native-maps'
import Aux from '../HOC/Aux'

const MapView = props => {

  let marker = null

  if(props.marker) {
    marker = <Marker pinColor={'#2A56C6'} coordinate={props.initialRegion}/>
  }

  return (
  <Map 
    style={styles.map}
    loadingIndicatorColor={'#2A56C6'}
    loadingBackgroundColor={'#2A56C6'}
    initialRegion={props.initialRegion}
    onPress={props.locationHandler}
    ref = {props.Ref}>

    {marker}
    
  </Map>  
  )
}

const styles = StyleSheet.create({
  map : {
    position : 'absolute',
    width : '100%',
    height : '100%'
  }
})

export default MapView
