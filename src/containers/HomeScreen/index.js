import React, {Component} from 'react'
import {StyleSheet,Text, View, Dimensions} from 'react-native'
import MapView from 'react-native-maps'

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

  render () {
    return( 
      <View style={styles.mapContent}>
        <MapView 
          style={styles.map}
          loadingIndicatorColor={'#2A56C6'}
          loadingBackgroundColor={'#2A56C6'}
          initialRegion={this.state.currentLocation}
          onPress={this.locationHandler}
          ref = {ref => this.map = ref}>
        </MapView>
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
  },

  map : {
    position : 'absolute',
    width : '100%',
    height : '100%'
  }
})

export default HomeScreen