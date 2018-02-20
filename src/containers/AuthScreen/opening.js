import React from 'react'
import {View, StyleSheet} from 'react-native'
import ButtonRegister from '../../components/UI/Button'

const Opening = () => {
  return (
    <View style={styles.container}>
      <ButtonRegister
          color='#3b5998'
          name="INGRESAR"/>

      <ButtonRegister
        color='#5A8DFE'
        name="REGISTRAR"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 0,
    justifyContent: 'space-around',
    width : '70%',
    height : 100
  }
});

export default Opening
