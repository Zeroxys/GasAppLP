import React, {Component} from 'react'
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {View, Text} from 'react-native-animatable'
import t from 'tcomb-form-native'
import Icon from 'react-native-vector-icons/Ionicons'

import ButtonRegister from '../../components/UI/Button'
import {UserSignUpModel, options} from '../../utils/SignupModel'

const {width, height} = Dimensions.get('window')

const Form = t.form.Form
const stylesheet = t.form.Form.stylesheet

const formStyles = {...stylesheet}
/*
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
*/

class SignupForm extends Component {
  _onPress = ()  => {
    var value = this.refs.form.getValue();
    if (value) {
      //console.warn(value);
    }
  }

  render () {
    return (
      <View style={styles.container}
        animation={'fadeInUp'}
        duration={1200}
        delay={0}>

        <Form
          ref="form"
          type={UserSignUpModel}
          options={options}/>
  
        <ButtonRegister
            color='#5A8DFE'
            name="REGISTRATE"
            onPress={this._onPress}/>  

        <TouchableOpacity onPress={() => this.props.onLinkPress()}>
          <Text 
            style={styles.link}>{'Ya tienes una cuenta ? '}</Text>
        </TouchableOpacity>

      </View>
    )
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
  },

  link: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  }
})

export default SignupForm