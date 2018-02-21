import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import t from 'tcomb-form-native'
import Icon from 'react-native-vector-icons/Ionicons'

import ButtonRegister from '../../components/UI/Button'


const Form = t.form.Form

const formStyles = {...t.form.Form.stylesheet}

formStyles.formGroup.normal.marginBottom = 8

formStyles.textbox.normal.borderWidth = 0;
formStyles.textbox.error.borderWidth = 0;
formStyles.textbox.normal.marginBottom = 0;
formStyles.textbox.error.marginBottom = 0;

formStyles.textboxView.normal.borderWidth = 0;
formStyles.textboxView.normal.borderColor = '#FFF';
formStyles.textboxView.error.borderWidth = 0;
formStyles.textboxView.normal.borderRadius = 0;
formStyles.textboxView.error.borderRadius = 0;
formStyles.textboxView.normal.borderBottomWidth = 1;
formStyles.textboxView.error.borderBottomWidth = 1;
formStyles.textbox.normal.marginBottom = 5;
formStyles.textbox.error.marginBottom = 5;

var User = t.struct({
  name: t.String,
  user :t.String,
  //email : t.String,
  //phone : t.String,
  password : t.String
})

const options = {
  auto : 'placeholders',
  fields : {
    name : {
      placeholder : 'NOMBRE',
      error : <Icon name="md-alert" size={19} color="#e53935"/>
    },

    user : {
      placeholder : 'USUARIO'
    },

    email : {
      placeholder : 'CORREO ELECTRONICO'
    },

    phone : {
      placeholder : 'TELEFONO'
    },

    password : {
      placeholder : 'CONTRASEÑA',
      password : true
    }
  }
}

class SignupForm extends Component {
  _onPress = ()  => {
    var value = this.refs.form.getValue();
    if (value) {
      console.warn(value);
    }
  }

  render () {
    console.warn(JSON.stringify(formStyles, null, 2))
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={User}
          options={options}/>
  
        <ButtonRegister
            color='#5A8DFE'
            name="REGISTRATE"
            onPress={this._onPress}/>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex :1,
    width : '70%'
  }
})

export default SignupForm