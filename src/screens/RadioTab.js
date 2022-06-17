import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../global/COLORS'

const RadioTab = () => {
  return (
    <View style={styles.container}>
      <Text>RadioTab</Text>
    </View>
  )
}

export default RadioTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
})