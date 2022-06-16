import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import TopTab from './src/navigation/TopTab';

export default function App() {

  const [loaded] = useFonts({
    OpenSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
    OpenSansRegular: require('./src/assets/fonts/OpenSans-Regular.ttf'),
    OpenSansLight: require('./src/assets/fonts/OpenSans-Light.ttf'),
  }); if (!loaded) return null;

  return (
    <NavigationContainer>
      <TopTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
