import React, {Component} from 'react';
import { StyleSheet, View, StatusBar, Dimensions, KeyboardAvoidingView } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import {Image} from 'react-native-animatable'

import LogoImg from '../../assets/gas.png'
import LogoImg2 from '../../assets/iconGas.png'
import Opening from './opening'
import SignupForm from './SignupForm'

const {width, height} = Dimensions.get('window')

class AuthScreen extends Component {

  state = {
    visibleForm : null
  }

  componentWillUpdate (nextProps) {
    if(!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this._hideAuthScreen()
    }
  }

  _hideAuthScreen = async () => {
    console.warn('looool escondiendome')
  }

  _setVisibleForm = async (visibleForm) => {
    this.setState ( prevState => {
      return {
        visibleForm : prevState.visibleForm = visibleForm
      }
    })
  }

  render() {
    let formStyle = !this.state.visibleForm ? { height: 0 } : { marginTop: 40 }
    let OpeningButtons = null
    let Forms = null

    if(!this.state.visibleForm && !this.props.isLoggedIn) {
      OpeningButtons = <Opening
              onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
              onSignInPress={() => this._setVisibleForm('LOGIN')}/>
    }

    if(this.state.visibleForm === 'SIGNUP') {
      Forms =  <SignupForm
        onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
        onSignInPress={() => this._setVisibleForm('LOGIN')}/>
    }

    return (
      <LinearGradient colors={['#4fc3f7', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.20)"/>

        <View style={styles.content}>
          
          <Image
            animation={'bounceIn'}
            duration={900}
            delay={2700}
            style={styles.LogoImg}
            source={LogoImg2}/>

          {OpeningButtons}

          <KeyboardAvoidingView            
            keyboardVerticalOffset={-1200}
            behavior={'padding'}
            style={[formStyle]}>
            {Forms}
          </KeyboardAvoidingView>

        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,
    flexDirection : 'column'
  },
  
  content : {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    top : '4%'
  },

  LogoImg: {
    flex: 1,
    height : null,
    width : width * 0.5,
    alignSelf : 'center',
    resizeMode : 'contain'
  }
});

export default AuthScreen
