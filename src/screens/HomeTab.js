import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import COLORS from '../global/COLORS'
import CategoryList from '../components/CategoryList'
import NewSongList from '../components/NewSongList'
import FavouriteArtistList from '../components/FavouriteArtistList'

const HomeTab = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <CategoryList />
        <NewSongList />
        <FavouriteArtistList navigation={navigation} />
      </View>
    </ScrollView>
  )
}

export default HomeTab

const styles = StyleSheet.create({
  // to change the color when going to top
  scrollViewContainer: {
    backgroundColor: COLORS.foreground,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.foreground,
  }
})