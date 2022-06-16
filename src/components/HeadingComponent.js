import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FONTS from '../global/FONTS'

const H1 = ({ children, customStyle }) => {
  return (
    <Text style={[styles.h1Style, customStyle]}>{children}</Text>
  )
}

const H2 = ({ children, customStyle }) => {
  return (
    <Text style={[styles.h2Style, customStyle]}>{children}</Text>
  )
}

const H3 = ({ children, customStyle }) => {
  return (
    <Text style={[styles.h3Style, customStyle]}>{children}</Text>
  )
}

const H4 = ({ children, customStyle }) => {
  return (
    <Text style={[styles.h4Style, customStyle]}>{children}</Text>
  )
}

const H5 = ({ children, customStyle }) => {
  return (
    <Text style={[styles.h5Style, customStyle]}>{children}</Text>
  )
}

const H6 = ({ children, customStyle }) => {
  return (
    <Text style={[styles.h6Style, customStyle]}>{children}</Text>
  )
}

export { H1, H2, H3, H4, H5, H6, }

const styles = StyleSheet.create({
  h1Style: {
    fontFamily: FONTS.OpenSansBold,
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 33.6
  },
  h2Style: {
    fontFamily: FONTS.OpenSansBold,
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 33.6
  },
  h3Style: {
    fontFamily: FONTS.OpenSansBold,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 24
  },
  h4Style: {
    fontFamily: FONTS.OpenSansBold,
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 19.2
  },
  h5Style: {
    fontFamily: FONTS.OpenSansBold,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 21
  },
  h6Style: {
    fontFamily: FONTS.OpenSansRegular,
    fontSize: 10,
    letterSpacing: 0,
    lineHeight: 21
  },
})