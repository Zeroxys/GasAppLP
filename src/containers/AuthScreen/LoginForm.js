import React, {Component} from 'react'
import {StyleSheet,Dimensions} from 'react-native'
import {View, Text} from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import t from 'tcomb-form-native'

import ButtonRegister from '../../components/UI/Button'

const {height, width} = Dimensions.get('window')

const Form = t.form.Form
const stylesheet = t.form.Form.stylesheet

const formStyles = {...stylesheet}

formStyles.fieldSet = "red"

formStyles.formGroup.normal.marginBottom = 0
formStyles.formGroup.error.marginBottom = 0

formStyles.button.height = 0

formStyles.textbox.normal.borderWidth = 0;
formStyles.textbox.normal.color = 'white'
formStyles.textbox.normal.borderWidth = 0;
formStyles.textbox.normal.fontSize = 10;
formStyles.textbox.error.fontSize = 10;
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
formStyles.textboxView.error.borderColor = '#FFF';
formStyles.textbox.normal.marginBottom = 5;

var User = t.struct({
  user :t.String,
  password : t.String
})

const options = {
  auto : 'placeholders',
  fields : {
    user : {
      placeholder : 'USUARIO',
      error : <Icon name="md-alert" size={19} color="#e53935"/>
    },

    password : {
      placeholder : 'CONTRASEÑA',
      password : true,
      error : <Icon name="md-alert" size={19} color="#e53935"/>
    }
  }
}

class LoginForm extends Component {

  render () {
    return(<View
        animation={'fadeInUp'}
        duration={1200}
        delay={0}
        style={styles.container}>
          <Form
            ref="form"
            type={User}
            options={options}/>

            <ButtonRegister
              color='#5A8DFE'
              name="INICIAR SESIÓN"
              onPress={this._onPress}/>
      </View>)
  }
}
const styles = StyleSheet.create({
  container : {
    flex:0,
    //borderWidth : 2,
    height: height * 0.5,
    borderRadius : 3,
    borderColor: 'white',
    width : width * 0.8,
  }
})

export default LoginForm
