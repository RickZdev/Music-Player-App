// SHADOW css-element working only for ios
// ELEVATION css-element is the equivalent for android
const SHADOWS = {
  light: {
    shadowColor: '#111536',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 3,
  },
  medium: {
    shadowColor: 'rgba(0, 0, 0, 0.176)',
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 48,
    elevation: 7,
  },
  dark: {
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 120,
    shadowOpacity: 10,
    elevation: 14,
  },
};

export default SHADOWS;