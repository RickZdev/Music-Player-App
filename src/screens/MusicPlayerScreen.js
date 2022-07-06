import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CustomBackButton, CustomOptionButton } from '../components/CustomButton'
import COLORS from '../global/COLORS'
import SHADOWS from '../global/SHADOWS'
import { H3, H5, H6 } from '../components/CustomHeading'
import FONTS from '../global/FONTS'
import { MaterialIcons, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider'
// import TrackPlayer, { Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player';
import { Audio } from 'expo-av'

const MusicPlayerScreen = ({ route, navigation }) => {
  const tempData = [
    {
      id: 1,
      songTitle: 'Marlboro Black',
      singer: 'Because',
      songImage: require('../assets/images/new-songs-1.png'),
      song: 'https://firebasestorage.googleapis.com/v0/b/shopping-app-be469.appspot.com/o/music%2FBecause-Marlboro-Black.mp3?alt=media&token=7bec8107-a106-45ad-bb2f-38dcb2151bf0'
    },
    {
      id: 2,
      songTitle: 'Sandali',
      singer: 'Because',
      songImage: require('../assets/images/new-songs-2.png'),
      song: 'https://firebasestorage.googleapis.com/v0/b/shopping-app-be469.appspot.com/o/music%2FBecause-Sandali.mp3?alt=media&token=45a74d98-1e36-49c8-8429-da7cbb75970d'

    },
    {
      id: 3,
      songTitle: "Araw-Araw",
      singer: 'Ben&Ben',
      songImage: require('../assets/images/new-songs-3.png'),
      song: 'https://firebasestorage.googleapis.com/v0/b/shopping-app-be469.appspot.com/o/music%2FBen%26Ben-Araw-Araw.mp3?alt=media&token=1835eb95-8fcb-4869-bee5-4a0b0ed00360'

    },
    {
      id: 4,
      songTitle: 'Kathang-Isip',
      singer: 'Ben&Ben',
      songImage: require('../assets/images/new-songs-1.png'),
      song: 'https://firebasestorage.googleapis.com/v0/b/shopping-app-be469.appspot.com/o/music%2FBen%26Ben-Kathang-Isip.mp3?alt=media&token=aaee35e0-2e0e-470b-bd13-ecd1acc3faee'

    },
    {
      id: 5,
      songTitle: 'Masyado Pang Maaga',
      singer: 'Ben&Ben',
      songImage: require('../assets/images/new-songs-3.png'),
      song: 'https://firebasestorage.googleapis.com/v0/b/shopping-app-be469.appspot.com/o/music%2FBen%26Ben-Masyado-Pang-Maaga.mp3?alt=media&token=cbb14b7e-c29c-4e4d-a9e4-513b2e421336'
    },
    {
      id: 6,
      songTitle: 'Sa Susunod Na Habang Buhay',
      singer: 'Ben&Ben',
      songImage: require('../assets/images/new-songs-1.png'),
      song: 'https://firebasestorage.googleapis.com/v0/b/shopping-app-be469.appspot.com/o/music%2FBen%26Ben-Sa-Susunod-na-Habang-Buhay.mp3?alt=media&token=33d6a042-64a6-46c6-b2ef-610055425090'
    },
  ]

  const data = route.params;

  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackInstance, setPlaybackInstance] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(data.index)
  const [volume, setVolume] = useState(1.0)
  const [isBuffering, setIsBuffering] = useState(false)

  useEffect(() => {
    const setupPlayer = async () => {
      await Audio.setAudioModeAsync({
        // interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        // playsInSilentModeIOS: true,
        // interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        // shouldDuckAndroid: true,
        // staysActiveInBackground: true,
        // playThroughEarpieceAndroid: true
      })

      loadAudio();
    }
    setupPlayer();
    console.log(currentIndex);
    setCurrentIndex(prev => prev + 1);
  }, [])

  const loadAudio = async () => {
    const playBack = new Audio.Sound()
    const source = {
      uri: tempData[currentIndex].song
    }

    const status = {
      shouldPlay: isPlaying,
      volume: volume,
    }

    playBack.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
    await playBack.loadAsync(source, status, false)
    setPlaybackInstance(playBack)
    console.log(tempData[currentIndex].song)
  }

  const onPlaybackStatusUpdate = (status) => {
    setIsBuffering(status.isBuffering)
  }

  const handlePlayPause = async () => {
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
    setIsPlaying(!isPlaying)
  }

  const handlePreviousTrack = async () => {
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex < tempData.length - 1 ? setCurrentIndex(prev => prev -= 1) : setCurrentIndex(0)
    }

    loadAudio()
  }

  const handleNextTrack = async () => {
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      console.log('current index', currentIndex);
      currentIndex < tempData.length - 1 ? setCurrentIndex(prev => prev += 1) : setCurrentIndex(0)
      console.log('now index', currentIndex);
      console.log('templength:', tempData.length - 1)
    }

    loadAudio()
  }


  return (
    <View>

      <View style={styles.musicPlayerContainer}>
        <View style={styles.musicPlayerHeaderNavigation}>
          <CustomBackButton onPress={() => navigation.goBack()} />
          <CustomOptionButton />
        </View>
        <ImageBackground
          source={require('../assets/images/music-player.png')}
          resizeMode='cover'
          style={styles.musicPlayerImage}
        />
        <ImageBackground
          source={require('../assets/images/Light.png')}
          resizeMode='cover'
          style={[styles.musicPlayerImage, { position: 'absolute' }]}
        />
        <View style={styles.musicPlayerDiscContainer}>
          <View style={styles.musicPlayerDiscImageWrapper}>
            <Image
              source={require('../assets/images/Glow.png')}
              resizeMode='cover'
              style={styles.musicPlayerDiscGlow}
            />
            <Image
              source={tempData[currentIndex === 0 || currentIndex > tempData.length - 1 ? 0 : currentIndex - 1].songImage}
              resizeMode='contain'
              style={[styles.musicPlayerDiscImage, { position: 'relative', zIndex: 1 }]}
            />

          </View>
          <View style={styles.musicPlayerDescription}>
            {currentIndex === tempData.length - 1 ?
              (<>
                <H3 customStyle={{ textAlign: 'center' }}>{tempData[currentIndex === [tempData.length - 1]].songTitle}</H3>
                <H5 customStyle={{ opacity: 0.5, marginTop: 15 }}>{tempData[currentIndex === [tempData.length - 1]].singer}</H5></>) :
              (<>
                <H3 customStyle={{ textAlign: 'center' }}>{tempData[currentIndex === 0 ? 0 : currentIndex - 1].songTitle}</H3>
                <H5 customStyle={{ opacity: 0.5, marginTop: 15 }}>{tempData[currentIndex === 0 ? 0 : currentIndex - 1].singer}</H5>
              </>)
            }
          </View>
          <View style={styles.musicPlayerProgressContainer}>
            <Slider
              style={styles.musicPlayerSlider}
              value={10}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor={COLORS.primary}
              minimumTrackTintColor={COLORS.primary}
              maximumTrackTintColor={COLORS.white}
              onSlidingComplete={() => { }}
            />
            <View style={styles.musicPlayerTime}>
              <H5 customStyle={{ fontFamily: FONTS.OpenSansLight, opacity: 0.5 }}>0:00</H5>
              <H5 customStyle={{ fontFamily: FONTS.OpenSansLight, opacity: 0.5 }}>0:00</H5>
            </View>
          </View>
          <View style={styles.musicPlayerControlsContainer}>
            <FontAwesome name="sliders" size={24} color={COLORS.primary} />
            <TouchableOpacity onPress={handlePreviousTrack}>
              <MaterialIcons name="skip-previous" size={35} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.musicPlayerControlsPlayButton} onPress={handlePlayPause}>
              <Ionicons name={!isPlaying ? "play" : "pause"} size={24} color={COLORS.background} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextTrack}>
              <MaterialIcons name="skip-next" size={35} color={COLORS.primary} />
            </TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={24} color={COLORS.primary} />
          </View>

        </View>
      </View>
    </View>
  )
}

export default MusicPlayerScreen

const styles = StyleSheet.create({
  musicPlayerContainer: {
    flex: 1,
  },
  musicPlayerHeaderNavigation: {
    position: 'absolute',
    zIndex: 99999,
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: Platform.OS === 'android' ? 46 : 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  musicPlayerImage: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  musicPlayerDiscContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('screen').height,
    paddingBottom: 20,
    paddingTop: Dimensions.get('screen').height - 600,
    marginBottom: 30,
  },
  musicPlayerDiscImageWrapper: {
    width: 196.1,
    height: 196.1,
    backgroundColor: COLORS.white,
    borderRadius: 96,
    ...SHADOWS.dark,
    elevation: 6,
  },
  musicPlayerDiscImage: {
    width: '100%',
    height: '100%',
    borderRadius: 96,
    borderWidth: 10,
    borderColor: COLORS.primary,
  },
  musicPlayerDiscGlow: {
    position: 'absolute',
    zIndex: 0,
    width: 218.04,
    height: 218.04,
    borderRadius: 125,
    opacity: 1,
    top: -10,
    left: -10,
  },
  musicPlayerDescription: {
    marginTop: 81.9,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  musicPlayerProgressContainer: {
    width: Dimensions.get('screen').width - 22,
    marginTop: 50,
  },
  musicPlayerSlider: {
    width: '100%',
    flexDirection: 'row'
  },
  musicPlayerTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  musicPlayerControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 22,
    marginTop: 14,
  },
  musicPlayerControlsPlayButton: {
    width: 69,
    height: 69,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: -30
  },

})