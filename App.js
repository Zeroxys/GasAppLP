import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Icons from 'react-native-vector-icons/Ionicons'

class App extends React.Component {

  componentDidMount () {
    setTimeout( () => {
      SplashScreen.hide()
    },3000)
  }

  render() {
    return (
      <View style={styles.content}>
  
        <Icons name="md-flame" size={180} color="#ff8a80"/>
  
        <View style={styles.container}>
          <TouchableOpacity>
            <Button
              title ='Ingresar' 
              color = '#3b5998'/>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Button
              title ='Registrar' 
              color = '#5A8DFE'/>
          </TouchableOpacity>
        </View>
      </View>
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

  container : {
    flex: 0,
    justifyContent: 'space-around',
    width : '70%',
    height : 100
  }
});

export default App
