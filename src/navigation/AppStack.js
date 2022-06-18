import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ArtistScreen from '../screens/ArtistScreen';
import TopTab from './TopTab';
import MusicPlayerScreen from '../screens/MusicPlayerScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TopTab" component={TopTab} />
      <Stack.Screen name="ArtistScreen" component={ArtistScreen} />
      <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen} />
    </Stack.Navigator>
  )
}

export { HomeStack }

const styles = StyleSheet.create({})