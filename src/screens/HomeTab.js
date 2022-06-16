import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import COLORS from '../global/COLORS'
import CategoryList from '../components/CategoryList'
import NewSongList from '../components/NewSongList'
import FavouriteArtistList from '../components/FavouriteArtistList'

const HomeTab = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <CategoryList />
        <NewSongList />
        <FavouriteArtistList />
      </View>
    </ScrollView>
  )
}

export default HomeTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.foreground,
  }
})