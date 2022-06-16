import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../global/COLORS'

const ProfileTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        {/* <H1>HELLO</H1> */}
      </View>
    </View>
  )
}

export default ProfileTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.foreground,
  }
})