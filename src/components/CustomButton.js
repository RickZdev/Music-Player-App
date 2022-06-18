import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../global/COLORS'
import { Feather, Entypo } from '@expo/vector-icons';

const CustomBackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Feather name={"arrow-left"} size={18} color="white" />
    </TouchableOpacity>
  )
}

const CustomCloseButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.closeButton} onPress={onPress}>
      <Feather name={"arrow-down"} size={18} color="white" />
    </TouchableOpacity>
  )
}

const CustomOptionButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.optionButton} onPress={onPress}>
      <Entypo name={"dots-three-vertical"} size={18} color="white" />
    </TouchableOpacity>
  )
}


const CustomOpenButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.openButton} onPress={onPress}>
      <Feather name={"arrow-up"} size={18} color="white" />
    </TouchableOpacity>
  )
}

export { CustomCloseButton, CustomOptionButton, CustomOpenButton, CustomBackButton }

const styles = StyleSheet.create({
  closeButton: {
    borderRadius: 20,
    backgroundColor: COLORS.background,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  openButton: {
    position: 'absolute',
    zIndex: 99,
    bottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.background,
    width: 28,
    height: 28,
    elevation: 7,
  },
  backButton: {
    borderRadius: 20,
    backgroundColor: COLORS.background,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center'
  }
})