import { Dimensions, FlatList, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../global/COLORS'
import { H5, H6 } from './CustomHeading'
import FONTS from '../global/FONTS'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const SongsList = () => {
  const tempData = [
    {
      id: 1,
      songTitle: 'Marlboro Black',
      singer: 'Because',
      songImage: require('../assets/images/new-songs-1.png'),
      song: require('../assets/music/Because-Marlboro-Black.mp3')
    },
    {
      id: 2,
      songTitle: 'Sandali',
      singer: 'Because',
      songImage: require('../assets/images/new-songs-2.png'),
      song: require('../assets/music/Because-Sandali.mp3')

    },
    {
      id: 3,
      songTitle: "Araw-Araw",
      singer: 'Ben&Ben',
      songImage: require('../assets/images/new-songs-3.png'),
      song: require('../assets/music/Ben&Ben-Araw-Araw.mp3')

    },
    {
      id: 4,
      songTitle: 'Kathang-Isip',
      singer: 'Ben&Ben',
      songImage: require('../assets/images/new-songs-1.png'),
      song: require('../assets/music/Ben&Ben-Kathang-Isip.mp3')

    },
    {
      id: 5,
      songTitle: 'Masyado Pang Maaga',
      singer: 'Ben&Ben',
      songImage: require('../assets/images/new-songs-3.png'),
      song: require('../assets/music/Ben&Ben-Masyado-Pang-Maaga.mp3')
    },
    {
      id: 6,
      songTitle: 'Sa Susunod Na Habang Buhay',
      singer: 'Ben&Ben',
      songImage: require('../assets/images/new-songs-1.png'),
      song: require('../assets/music/Ben&Ben-Sa-Susunod-na-Habang-Buhay.mp3')
    },
  ]

  const navigation = useNavigation();
  return (
    <View style={styles.listContainer}>
      <View style={styles.listContainerWrapper}>
        <FlatList
          data={tempData}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item }) => <SongCard data={item} navigation={navigation} />}
        />
      </View>
    </View>
  )
}

const SongCard = ({ data, navigation }) => (
  <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('MusicPlayerScreen', data)}>
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
      <View style={{ width: '80%' }}>
        <H5>{data.songTitle}</H5>
        <H6 customStyle={{ fontFamily: FONTS.OpenSansLight }}>{data.singer}</H6>
      </View>
      <Entypo name="dots-three-horizontal" size={24} color={COLORS.primary} />
    </View>
  </TouchableOpacity >
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