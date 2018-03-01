import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'

import InfoContent from './InfoContent'
const {width, height} = Dimensions.get('window')

const InfoBox = (props) => {
  let arrowIcon = null
  if(props.expand) {
    arrowIcon = "ios-arrow-up"
  } else {
    arrowIcon = "ios-arrow-down"
  }

  return (
    <View style={styles.infoContainers}>
      <Collapsible easing={"easeIn"} collapsed={props.expand} duration={500} align={"bottom"} style={styles.collapsible}>
        <InfoContent/>
      </Collapsible>      
    </View>
  )
}

const styles = StyleSheet.create({

  infoContainers : {
    width : '100%',
    alignItems : 'center',
  },

  collapsible : {
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    height: 200
  }
})

export default InfoBox
