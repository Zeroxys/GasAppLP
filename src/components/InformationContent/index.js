import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Collapsible from 'react-native-collapsible'
import InfoContent from './InfoContent'

const {width, height} = Dimensions.get('window')

const InfoBox = (props) => {
  return (
    <View style={styles.infoContainers}>
      <Collapsible collapsed={props.expand} duration={500} style={styles.collapsible}>
        <InfoContent expand={props.expand}/>
      </Collapsible>      
    </View>
  )
}

const styles = StyleSheet.create({

  infoContainers : {
    //position : 'absolute',
    width : '100%',
  },

  collapsible : {
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    height: 200
  }
})

export default InfoBox
