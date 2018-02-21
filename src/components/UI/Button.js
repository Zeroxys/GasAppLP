import React from 'React'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
//import LinearGradient from 'react-native-linear-gradient'

const ButtonRegister = (props) => {
  return (
    <TouchableOpacity style={[styles.content, {backgroundColor : props.color}]} onPress={props.onPress}>
      <Text style={{color : 'white', fontWeight : '900'}}>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  content : {
    justifyContent : 'center',
    alignItems: 'center',
    flex : 0,
    height : 30,
    elevation : 5,
    borderRadius : 3
  }
})

export default ButtonRegister
