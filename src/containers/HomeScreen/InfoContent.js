import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, Button, Dimensions, Animated} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'

import Info from './info'

const {width, height} = Dimensions.get('window')

class InfoContent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      expanded : true,
      maxHeight : null,
      minHeight : null,
    }
  }

  render () {
    let arrowIcon = null

    if(this.props.expand) {
      arrowIcon = "ios-arrow-up"
    } else {
      arrowIcon = "ios-arrow-down"
    }

    return (
      <View style={styles.infoContainers}>
        <Collapsible easing={"easeIn"} collapsed={this.props.expand} duration={500} align={"bottom"} style={styles.collapsible}>
          <View style={styles.generalContent}>
            <View>
              <Info
                name="Kilos"
                iconName="ios-flame"
                showOptions = {e => this.props.showOptions(e)}
                messageInput="Introduce los Kilos"/>
    
              <Info
                name="Cantidad"
                iconName="md-flask"
                showOptions = {e => this.props.showOptions(e)}
                messageInput="Introduce el Monto"/>             
            </View>
            <TouchableOpacity
                  style={styles.aprobar}
                  title={"Aprobar"} 
                  onPress={e => this.props.openModal()}>
                  <Text style={{color : 'white'}}>APROBAR</Text>
            </TouchableOpacity> 
          </View>
        </Collapsible>      
      </View>
    )
  }

}

const styles = StyleSheet.create({

  infoContainers : {
    //backgroundColor : 'white',
    width : '100%',
    alignItems : 'center',
  },

  collapsible : {
    width : '100%',
    //borderWidth : 2,
    justifyContent : 'center',
    alignItems : 'center',
    height: 200
  },

  generalContent : {
    //borderWidth : 2,
    //borderColor : 'green',
    width : '100%',
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center',
  },

  aprobar : {
    top:5,
    elevation : 2,
    width : 300,
    justifyContent:'center',
    alignItems : 'center',
    backgroundColor : "#2A56C6",
    height : 30
  }
})

export default InfoContent
