import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../global/COLORS'

const SearchTab = () => {
  return (
    <View style={styles.container}>
      <Text>SearchTab</Text>
    </View>
  )
}

export default SearchTab

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  }
})