import React from 'React'
import {TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ArrowButton = (props) => {
  let arrowIcon = null

  if(props.Icon) {
    arrowIcon = "ios-arrow-up"
  } else {
    arrowIcon = "ios-arrow-down"
  }

  return (
    <TouchableOpacity style={styles.expandButton} onPress={props.OnPress}>
      <Icon name={arrowIcon} size={25} style={{top : 5}}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  expandButton : {
    backgroundColor : '#eee',
    elevation : 2,
    alignItems : 'center',
    width : 40,
    height : 40,
    borderRadius : 100,
    top:'80%',
    marginBottom : 5,
    marginBottom : 5
  }
})

export default ArrowButton
