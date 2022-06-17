import 'react-native-gesture-handler'
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font'

import { HomeStack } from './src/navigation/AppStack';
import COLORS from './src/global/COLORS';

export default function App() {

  const [loaded] = useFonts({
    OpenSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
    OpenSansRegular: require('./src/assets/fonts/OpenSans-Regular.ttf'),
    OpenSansLight: require('./src/assets/fonts/OpenSans-Light.ttf'),
  }); if (!loaded) return null;

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  // wrap view container to navigation container to remove the flashing white when switching screens
  container: {
    flex: 1, backgroundColor:
      COLORS.background
  }
})