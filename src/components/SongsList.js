import { Dimensions, FlatList, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../global/COLORS'
import { H5, H6 } from './CustomHeading'
import FONTS from '../global/FONTS'
import { Entypo } from '@expo/vector-icons';


const SongsList = () => {
  const tempData = [
    {
      id: 1,
      songTitle: 'Imagine Dragons',
      singer: 'Cameron Williamson',
      songImage: require('../assets/images/new-songs-1.png')
    },
    {
      id: 2,
      songTitle: 'Renaissance',
      singer: 'Podval Caplella',
      songImage: require('../assets/images/new-songs-2.png')
    },
    {
      id: 3,
      songTitle: "Ivar's Revenge",
      singer: 'Savannah Nguyen',
      songImage: require('../assets/images/new-songs-3.png')
    },
    {
      id: 4,
      songTitle: 'What do you Mean?',
      singer: 'Justin Bieber',
      songImage: require('../assets/images/new-songs-1.png')
    },
    {
      id: 5,
      songTitle: 'Mean It',
      singer: 'LANY',
      songImage: require('../assets/images/new-songs-3.png')
    },
    {
      id: 6,
      songTitle: 'What do you Mean?',
      singer: 'Justin Bieber',
      songImage: require('../assets/images/new-songs-1.png')
    },
    {
      id: 7,
      songTitle: 'What do you Mean?',
      singer: 'Justin Bieber',
      songImage: require('../assets/images/new-songs-1.png')
    },
    {
      id: 8,
      songTitle: 'What do you Mean?',
      singer: 'Justin Bieber',
      songImage: require('../assets/images/new-songs-1.png')
    },
    {
      id: 9,
      songTitle: 'What do you Mean?',
      singer: 'Justin Bieber',
      songImage: require('../assets/images/new-songs-1.png')
    },
    {
      id: 10,
      songTitle: 'What do you Mean?',
      singer: 'Justin Bieber',
      songImage: require('../assets/images/new-songs-1.png')
    },
    {
      id: 11,
      songTitle: 'What do you Mean?',
      singer: 'Justin Bieber',
      songImage: require('../assets/images/new-songs-1.png')
    },
    {
      id: 12,
      songTitle: 'What do you Mean?',
      singer: 'Justin Bieber',
      songImage: require('../assets/images/new-songs-1.png')
    }

  ]
  return (
    <View style={styles.listContainer}>
      <View style={styles.listContainerWrapper}>
        <FlatList
          data={tempData}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item }) => <SongCard data={item} />}
        />
      </View>
    </View>
  )
}

const SongCard = ({ data }) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardNumberContainer}>
      <H6 customStyle={{ opacity: 1 }}>{data.id}</H6>
    </View>
    <View style={styles.cardImageWrapper}>
      <Image
        source={data.songImage}
        resizeMode='contain'
        style={styles.cardImage}
      />
    </View>
    <View style={styles.cardSongDescription}>
      <View>
        <H5>{data.songTitle}</H5>
        <H6 customStyle={{ fontFamily: FONTS.OpenSansLight }}>{data.singer}</H6>
      </View>
      <Entypo name="dots-three-horizontal" size={24} color={COLORS.primary} />
    </View>
  </View >
)

export default SongsList

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingTop: 22,
    marginBottom: 290,
  },
  listContainerWrapper: {
    backgroundColor: COLORS.foreground,
    width: Dimensions.get('screen').width,
    paddingTop: 21,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 29,
    paddingRight: 28,
    marginBottom: 15,
  },
  cardNumberContainer: {
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 22.7,
    height: 22.7,
    borderWidth: 1,
  },
  cardImageWrapper: {
    paddingLeft: 15.3,
    paddingRight: 13,
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  cardSongDescription: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})