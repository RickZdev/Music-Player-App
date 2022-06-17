import { Dimensions, FlatList, ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'

import COLORS from '../global/COLORS'
import { H3, H5, H6 } from './CustomHeading'

const CategoryList = () => {

  const tempData = [
    {
      id: 1,
      headerTitle: 'Featured Song',
      songTitle: 'Follow The Leader ft. Jennifer',
      singer: 'Wisin & Yandel',
      releasedDate: '11.12.2021',
    },
    {
      id: 2,
      headerTitle: 'Featured Song',
      songTitle: 'Follow The Leader ft. Jennifer',
      singer: 'Wisin & Yandel',
      releasedDate: '11.12.2021',
    },
    {
      id: 3,
      headerTitle: 'Featured Song',
      songTitle: 'Follow The Leader ft. Jennifer',
      singer: 'Wisin & Yandel',
      releasedDate: '11.12.2021',
    }
  ]

  return (
    <View style={styles.listContainer}>
      <View style={styles.listContainerWrapper}>
        <FlatList
          data={tempData}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item, index }) => <CategoryCard data={item} index={index} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const CategoryCard = ({ data, index }) => {
  return (
    <View style={[styles.cardContainer, { marginLeft: index === 0 ? 21 : 0 }]}>
      <H3 customStyle={styles.cardTitle}>{data.headerTitle}</H3>
      <ImageBackground
        source={require('../assets/images/featured-song.png')}
        resizeMode='contain'
        style={styles.cardImage}
      />
      <View style={styles.cardSongDescription}>
        <H5>{data.songTitle}</H5>
        <H6>{data.singer} | {data.headerTitle} | {data.releasedDate}</H6>
      </View>
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: COLORS.foreground,
  },
  listContainerWrapper: {
    paddingTop: 30,
    paddingBottom: 6,
  },
  cardContainer: {
    paddingRight: 10,
  },
  cardImage: {
    width: Dimensions.get('screen').width - 45,
    height: 198,
    opacity: .6
  },
  cardTitle: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 16,
    marginLeft: 18,
  },
  cardSongDescription: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    marginLeft: 18
  },
})