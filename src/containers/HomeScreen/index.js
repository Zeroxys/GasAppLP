import React, {Component} from 'react'
import {StyleSheet,Text, View, Dimensions} from 'react-native'

import MapView from '../../components/Map/MapView'
import PositionButton from '../../components/PositionButton/PositionButton'
import ArrowButton from '../../components/ArrowButton/ArrowButton'
import PriceBox from '../../components/PriceBox/PriceBox'
import Aux from '../../components/HOC/Aux'
import InfoContent from './InfoContent'

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
      <Aux>
        <View style={styles.mapContent}>
          <MapView
            marker = {this.state.marker}
            initialRegion={this.state.currentLocation}
            OnPress={this.locationHandler}
            Ref = {ref => this.map = ref}/>
          <PriceBox/>
          <ArrowButton OnPress={this.toggle} Icon={this.state.expand}/>
          <PositionButton OnPress={this.getCurrentPosition}/>
          <InfoContent 
            toggle = {this.toggle}
            expand = {this.state.expand}
            openModal={this.openModal} 
            showOptions={this.showOptions}/>
        </View>
      </Aux>)
  }
}

const styles = StyleSheet.create({
  mapContent : {
    width : '100%',
    minHeight : '100%',
    maxHeight : '100%',
    alignItems :'center',
  }
})

export default HomeScreen