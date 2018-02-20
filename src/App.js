import React, {Component} from 'react';
import {} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import AuthScreen from './containers/AuthScreen/index'

class App extends Component {

  state = {
    isLoggedIn : false,
    isLoading : false,
    isAppReady : false
  }

  //Simulate what the user is Login
  _Login = (username, password) => {
    
    this.setState( (prevState) => {
      isLoading : this.prevState.isLoading = true
    })

    setTimeout( () => {
      this.setState( (prevState) => {
        isLoading : this.prevState.isLoading = false
        isLoggedIn : this.prevState.isLoggedIn = true
      })
    }, 1000)

  }

  //Simulate what the user is SignUp
  _SignUp = (username, password, fullName) => {
    
    this.setState( (prevState) => {
      isLoading : this.prevState.isLoading = true
    })

    setTimeout( () => {
      this.setState( (prevState) => {
        isLoading : this.prevState.isLoading = false
        isLoggedIn : this.prevState.isLoggedIn = true
      })
    }, 1000)

  }

  componentDidMount () {
    setTimeout( () => {
      SplashScreen.hide()
    },3000)
  }

  render() {
    return (
      <AuthScreen
        login={this._Login}
        signup={this._SignUp}
        isLoggedIn={this.state.isLoggedIn}
        isLoading={this.state.isLoading}
        isAppReady={this.state.isAppReady}/>
    )
  }
}


export default App