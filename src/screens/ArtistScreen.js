import { Dimensions, ImageBackground, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View, Animated, Platform } from 'react-native'
import React, { useCallback, useMemo, useRef, useState, } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { Feather } from '@expo/vector-icons';
import NewSongList from '../components/NewSongList'
import COLORS from '../global/COLORS'
import { H3, H6 } from '../components/CustomHeading';
import SongsList from '../components/SongsList';
import FONTS from '../global/FONTS';
import { CustomBackButton, CustomCloseButton, CustomOpenButton, CustomOptionButton } from '../components/CustomButton';

const ArtistScreen = ({ navigation }) => {
  StatusBar.setBackgroundColor('transparent')
  StatusBar.setBarStyle('light-content')

  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = useMemo(() => ['37%'], []);
  const bottomSheetRef = useRef(null);
  const scrollRef = useRef();
  const { width } = Dimensions.get('window');

  const handleOpenBottomSheet = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true)
  })

  const handleCloseBottomSheet = () => {
    setIsOpen(false)
  }

  return (
    <View style={styles.container}>
      <ArtistHeaderComponent navigation={navigation} />
      <ArtistSongsComponent scrollRef={scrollRef} width={width} />
      <ArtistAlbumComponent bottomSheetRef={bottomSheetRef} snapPoints={snapPoints} isOpen={isOpen} setIsOpen={setIsOpen} handleCloseBottomSheet={handleCloseBottomSheet} handleOpenBottomSheet={handleOpenBottomSheet} />
    </View >
  )
}

const ArtistHeaderComponent = ({ navigation }) => (
  <View style={styles.artistHeaderContainer}>
    <View style={styles.artistHeaderNavigation}>
      <CustomBackButton onPress={() => navigation.goBack()} />
      <CustomOptionButton />
    </View>
    <ImageBackground
      source={require('../assets/images/artistHeader.png')}
      resizeMode='cover'
      style={styles.artistHeaderImage}
    />
    <ImageBackground
      source={require('../assets/images/overlay.png')}
      resizeMode='cover'
      style={[styles.artistHeaderImage, { position: 'absolute' }]}
    />
    <View style={styles.artistDescription}>
      <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        <H3>Olivia Rodrigo</H3>
        <TouchableOpacity style={styles.artistFollowButton}>
          <H6 customStyle={{ opacity: 1 }}>Follow</H6>
        </TouchableOpacity>
      </View>
      <H6 customStyle={{ opacity: 1 }}>5K Followers | 2.5K Listeners | 10 Following</H6>
    </View>
  </View>
)

const ArtistSongsComponent = ({ scrollRef, width }) => {
  // to convert touchableOpacity to animated. for the animation to work.
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
  const animation = useRef(new Animated.Value(0)).current;

  const topSongsButton = animation.interpolate({
    inputRange: [0, width],
    outputRange: [COLORS.foreground, COLORS.background]
  })

  const allSongsButton = animation.interpolate({
    inputRange: [0, width],
    outputRange: [COLORS.background, COLORS.foreground]
  })

  const topSongsText = animation.interpolate({
    inputRange: [0, width],
    outputRange: [COLORS.primary, COLORS.white]
  })

  const allSongsText = animation.interpolate({
    inputRange: [0, width],
    outputRange: [COLORS.white, COLORS.primary]
  })

  return (
    <View style={styles.songsButtonsContainer}>
      <View style={styles.songsButtonsContainerWrapper}>
        <AnimatedTouchable style={[styles.songsButtons, { backgroundColor: topSongsButton }]} onPress={() => scrollRef.current.scrollTo({ x: 0 })} activeOpacity={1}>
          <Animated.Text style={{ color: topSongsText, fontFamily: FONTS.OpenSansBold, fontSize: 16, letterSpacing: 0, lineHeight: 19.2 }}>Top Songs</Animated.Text>
        </AnimatedTouchable>
        <AnimatedTouchable style={[styles.songsButtons, { backgroundColor: allSongsButton }]} onPress={() => scrollRef.current.scrollTo({ x: width })} activeOpacity={1}>
          <Animated.Text style={{ color: allSongsText, fontFamily: FONTS.OpenSansBold, fontSize: 16, letterSpacing: 0, lineHeight: 19.2 }}>All Songs</Animated.Text>
        </AnimatedTouchable>
      </View>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.containerWrapper}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        pagingEnabled={true}
        indicatorStyle={'white'}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false })}
      >
        <SongsList />
        <SongsList />
      </ScrollView>
    </View>
  )
}

const ArtistAlbumComponent = ({ bottomSheetRef, snapPoints, isOpen, setIsOpen, handleOpenBottomSheet, handleCloseBottomSheet }) => {
  return (
    <>
      {
        isOpen ?
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
            animateOnMount={true}
            style={styles.bottomSheetContainer}
            backgroundStyle={{ backgroundColor: COLORS.background }}
            handleComponent={() => (
              <View style={styles.handleContainer}>
                <CustomCloseButton onPress={handleCloseBottomSheet} />
              </View>
            )}
          >
            <ScrollView style={styles.bottomSheetViewContainer} showsVerticalScrollIndicator={false}>
              <View style={styles.bottomSheetViewContainerWrapper}>
                <NewSongList />
              </View>
            </ScrollView>
          </BottomSheet>
          : <CustomOpenButton onPress={() => handleOpenBottomSheet(0)} />
      }
    </>
  )
}

export default ArtistScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.foreground
  },
  artistHeaderContainer: {
    backgroundColor: COLORS.background
  },
  artistHeaderNavigation: {
    position: 'absolute',
    zIndex: 999,
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: Platform.OS === 'android' ? 46 : 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  artistHeaderImage: {
    width: Dimensions.get('screen').width,
    height: 245,
  },
  artistFollowButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 19,
  },
  artistDescription: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingLeft: 28,
    paddingBottom: 29,
  },
  songsButtonsContainerWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: -15,
    zIndex: 99,
  },
  songsButtons: {
    paddingHorizontal: 56,
    paddingVertical: 8,
    borderRadius: 20
  },
  bottomSheetViewContainerWrapper: {
    backgroundColor: COLORS.background,
    paddingBottom: 10,
  },
  handleContainer: {
    borderTopRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: COLORS.foreground,
    marginTop: -1
  },
  handleClose: {
    borderRadius: 20,
    backgroundColor: COLORS.background,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  handleOpen: {
    position: 'absolute',
    zIndex: 99,
    bottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.background,
    width: 28,
    height: 28,
    elevation: 7,
  }
})