import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';

import COLORS from '../global/COLORS'
import { H3, H5 } from './CustomHeading'

const FavouriteArtistList = () => {

  const tempData = [
    {
      id: 1,
      singer: 'Taylor Swift',
    },
    {
      id: 2,
      singer: 'Olivia Rodrigo',
    },
    {
      id: 3,
      singer: 'LANY',
    },
    {
      id: 4,
      singer: 'Justin Bieber',
    },
    {
      id: 5,
      singer: 'Arthur Nery',
    },

  ]

  return (
    <View style={styles.listContainer}>
      <View style={styles.listContainerWrapper}>
        <H3 customStyle={styles.listHeaderTitle}>Favourite Artist</H3>
        {tempData.map((item, index) => (
          <View key={index}>
            <ArtistCard data={item} />
          </View>
        ))}
      </View>
    </View>
  )
}

const ArtistCard = ({ data }) => {
  return (
    <View style={styles.cardContainer}>
      <H5 customStyle={{ color: COLORS.primary }}>{data.singer}</H5>
      <SimpleLineIcons name="arrow-right" size={14} color={COLORS.primary} />
    </View>
  )
}

export default FavouriteArtistList

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: COLORS.background,
    paddingTop: 14.31,
  },
  listHeaderTitle: {
    paddingLeft: 31,
    marginBottom: 16.99
  },
  cardContainer: {
    backgroundColor: COLORS.foreground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 39,
    marginRight: 32.95,
    marginBottom: 12,
    borderRadius: 10,
    paddingHorizontal: 12.75,
    paddingTop: 8,
    paddingBottom: 9,
  },
})