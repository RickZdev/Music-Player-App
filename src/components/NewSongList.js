import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../global/COLORS'
import { H3, H5, H6 } from './CustomHeading'
import FONTS from '../global/FONTS'

const NewSongList = () => {
  const tempData = [
    {
      id: 1,
      songTitle: 'Urgent Siege',
      singer: 'Damned Anthem',
      songImage: require('../assets/images/new-songs-1.png')
    },
    {
      id: 2,
      songTitle: 'Urgent Siege',
      singer: 'Damned Anthem',
      songImage: require('../assets/images/new-songs-2.png')
    },
    {
      id: 3,
      songTitle: 'Urgent Siege',
      singer: 'Damned Anthem',
      songImage: require('../assets/images/new-songs-3.png')

    },
    {
      id: 4,
      songTitle: 'Urgent Siege',
      singer: 'Damned Anthem',
      songImage: require('../assets/images/new-songs-1.png')

    }
  ]
  return (
    <View style={styles.listContainer}>
      <View style={styles.listContainerWrapper}>
        <H3 customStyle={styles.listHeaderTitle}>New Songs</H3>
        <FlatList
          data={tempData}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item, index }) => <NewSongCard data={item} index={index} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const NewSongCard = ({ data, index }) => {
  return (
    <View style={[styles.cardContainer, { marginLeft: index === 0 ? 26 : 0 }]}>
      <Image
        source={data.songImage}
        resizeMode='contain'
        style={styles.cardImage}
      />
      <View style={styles.cardSongDescription}>
        <H5>{data.songTitle}</H5>
        <H6 customStyle={{ fontFamily: FONTS.OpenSansLight }}>{data.singer}</H6>
      </View>

    </View >
  )
}

export default NewSongList

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: COLORS.background,
    paddingTop: 14,
  },
  listHeaderTitle: {
    paddingLeft: 29.02,
    paddingBottom: 10.01
  },
  cardContainer: {
    paddingRight: 9.64
  },
  cardSongDescription: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})