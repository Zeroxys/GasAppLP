import React, {Component} from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import {Image} from 'react-native-animatable'

import LogoImg from '../../assets/gas.png'
import LogoImg2 from '../../assets/iconGas.png'
import Opening from './opening'
import SignInForm from './SignInForm'

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
        visibleForm : prevState.visibleForm = true
      }
    })
    console.warn(visibleForm)
  }

  render() {

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

          {(!this.state.visibleForm && !this.props.isLoggedIn) && (
            <Opening
              onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
              onSignInPress={() => this._setVisibleForm('LOGIN')}
            />
          )}

          {(!this.state.visibleForm === "SIGNUP") && (
            <SignInForm
              onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
              onSignInPress={() => this._setVisibleForm('LOGIN')}
            />
          )}


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
    alignItems: 'center',
    top : '10%'
  },

  LogoImg: {
    flex: 1,
    height : null,
    width : width * 0.5,
    resizeMode : 'contain'
  }
});

export default AuthScreen
