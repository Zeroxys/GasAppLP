import React, {Component} from 'react'
import {StyleSheet,Dimensions, TouchableOpacity} from 'react-native'
import {View, Text} from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import t from 'tcomb-form-native'

import ButtonRegister from '../../components/UI/Button'

const {height, width} = Dimensions.get('window')

const Form = t.form.Form
const stylesheet = t.form.Form.stylesheet

const formStyles = {...stylesheet}

formStyles.fieldSet = "red"

formStyles.formGroup.normal.marginBottom = 10
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

var LoginUser = t.struct({
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
      secureTextEntry: true,
      error : <Icon name="md-alert" size={19} color="#e53935"/>
    }
  }
}

class LoginForm extends Component { 

  constructor(props) {
    super(props)
  }

  render () {
    return(<View
        animation={'fadeInUp'}
        duration={1200}
        delay={0}
        style={styles.container}>
          <Form
            ref="form"
            type={LoginUser}
            options={options}/>

            <ButtonRegister
              color='#5A8DFE'
              name="INICIAR SESIÓN"
              onPress={this._onPress}/>

            <TouchableOpacity onPress={() => this.props.onLinkPress()}>
              <Text 
                style={styles.link}>{'Aun no estas registrado ? '}</Text>
            </TouchableOpacity>
      </View>)
  }
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    borderRadius : 3,
    width : width * 0.8,
  },
  link: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  }
})

export default LoginForm
