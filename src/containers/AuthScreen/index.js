import React, {Component} from 'react';
import { StyleSheet,
  View,
  StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Icons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

import Opening from './opening'

class AuthScreen extends Component {

  componentDidMount () {
    setTimeout( () => {
      SplashScreen.hide()
    },3000)
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
    
          <Icons name="md-flame" size={180} color="#ff8a80"/>

          <Opening/>

        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  content : {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    width : '100%'
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  }
});

export default AuthScreen
