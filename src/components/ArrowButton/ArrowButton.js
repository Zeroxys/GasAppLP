import React from 'React'
import {TouchableOpacity, StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import InfoContent from '../InformationContent'

const ArrowButton = (props) => {
  let arrowIcon = null

  if(props.Icon) {
    arrowIcon = "ios-arrow-up"
  } else {
    arrowIcon = "ios-arrow-down"
  }

  return (
    <View style={styles.container}>
      <InfoContent expand={props.expand}/>
      <TouchableOpacity style={styles.expandButton} onPress={props.OnPress}>
        <Icon name={arrowIcon} size={25} style={{top : 5}}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
    justifyContent : 'center',
    width : '100%',
    top:'40%',
    backgroundColor : 'rgba(0,0,0,0.2)',
    minHeight : '10%',
    maxHeight : '40%'
  },

  expandButton : {
    backgroundColor : '#eee',
    elevation : 5,
    alignItems : 'center',
    width : 40,
    height : 40,
    borderRadius : 100,
    marginBottom : 5,
    marginBottom : 5
  }
})

export default ArrowButton
