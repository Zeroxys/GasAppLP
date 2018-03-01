import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'

//import info
import ProductButton from './ProductButton'
import SuccessButton from '../UI/SuccessButton'

const {width, height} = Dimensions.get('window')

const InfoContent = (props) => {

  let arrowIcon = null

  if(props.expand) {
    arrowIcon = "ios-arrow-up"
  } else {
    arrowIcon = "ios-arrow-down"
  }

  return (
    <View style={styles.generalContent}>
      <View>
        
        <ProductButton
          name="Kilos"
          iconName="ios-flame"
          showOptions = {props.showOptions}
          messageInput="Introduce los Kilos"/>

        <ProductButton
          name="Cantidad"
          iconName="md-flask"
          showOptions = {props.showOptions}
          messageInput="Introduce el Monto"/>

        </View>
      <SuccessButton title={'Comprar'}/>
    </View>
  )
}

const styles = StyleSheet.create({

  generalContent : {
    width : '100%',
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center',
  }
})

export default InfoContent
