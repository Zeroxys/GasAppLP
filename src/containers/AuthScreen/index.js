import React, {Component} from 'react';
import { StyleSheet,
  Text, 
  View, 
  TouchableOpacity, 
  Button,
  StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Icons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

import ButtonRegister from '../../components/UI/Button'

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
          backgroundColor="rgba(255, 255, 255, 0)"/>

        <View style={styles.content}>
    
          <Icons name="md-flame" size={180} color="#ff8a80"/>
    
          <View style={styles.container}>
            <ButtonRegister
                color='#3b5998'
                name="INGRESAR"/>

            <ButtonRegister
              color='#5A8DFE'
              name="REGISTRAR"/>

          </View>
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
  },

  container : {
    flex: 0,
    justifyContent: 'space-around',
    width : '70%',
    height : 100
  }
});

export default AuthScreen
