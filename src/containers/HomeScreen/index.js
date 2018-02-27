import React, {Component} from 'react'
import {StyleSheet,Text, View, Dimensions} from 'react-native'

import MapView from '../../components/Map/MapView'
import PositionButton from '../../components/PositionButton/PositionButton'
import ArrowButton from '../../components/ArrowButton/ArrowButton'
import PriceBox from '../../components/PriceBox/PriceBox'

const {width, height} = Dimensions.get('window')

class HomeScreen extends Component {
  state = {
    currentLocation : {
      latitude : 17.989456,
      longitude : -92.947506,
      latitudeDelta : 0.0122,
      longitudeDelta : width / height * 0.0122
    },
    expand : true,
    marker : false,
    visible : false
  }

  toggle = () => {
    this.setState( prevState => {
      return {
        expand : !prevState.expand
      }
    })
  }

  getCurrentPosition = (event) => {
    navigator.geolocation.getCurrentPosition( pos => {
      
      const coordsEvent = {
        nativeEvent : {
          coordinate : {
            latitude : pos.coords.latitude,
            longitude :  pos.coords.longitude
          }
        }
      }
      
      this.locationHandler(coordsEvent)

    }, error_handler => {
      if(error_handler) alert('get current position failed')
    })
  }

  locationHandler = event => {
    let coords = event.nativeEvent.coordinate

    this.map.animateToRegion({
      ...this.state.currentLocation,
      latitude :  coords.latitude,
      longitude : coords.longitude
    })

    this.setState(prevState => {
      return {
        currentLocation : {
          ...prevState.currentLocation,
          latitude : coords.latitude,
          longitude : coords.longitude
        },
        marker : true
      }
    })
  }

  componentDidMount () {
    this.getCurrentPosition()
  }

  render () {
    return( 
      <View style={styles.mapContent}>
        <MapView
          marker = {this.state.marker}
          initialRegion={this.state.currentLocation}
          onPress={this.locationHandler}
          Ref = {ref => this.map = ref}/>
        <PriceBox/>
        <ArrowButton OnPress={this.toggle} Icon={this.state.expand}/>
        <PositionButton OnPress={this.getCurrentPosition}/>
      </View>)
  }
}

const styles = StyleSheet.create({
  content : {
    flex : 1,
    width: '100%',
    height : '100%',
    justifyContent : 'flex-end',
    alignItems : 'center'
  },

  mapContent : {
    width : '100%',
    minHeight : '100%',
    maxHeight : '100%',
    alignItems :'center',
  }
})

export default HomeScreen