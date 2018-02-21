import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import t from 'tcomb-form-native'

import ButtonRegister from '../../components/UI/Button'


const Form = t.form.Form

var User = t.struct({
  name: t.String,
  password : t.String
})

const options = {}

const SignInForm = () => {
  return (
    <View>
      <Form
        ref="form"
        type={User}
        options={options}/>

      <ButtonRegister
          color='#5A8DFE'
          name="ENTRAR"/>  
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'red',
    height : 300,
    width : 500
  }
})
