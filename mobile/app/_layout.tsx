import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // jangan render apa pun sampai font siap
  }

  return (
    <SafeAreaProvider>
      {/* Stack otomatis mendeteksi semua route */}
      <Stack
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
          statusBarHidden: true,
        }}
      >
        {/* Daftar screen manual (optional, bisa juga otomatis) */}
        <Stack.Screen name="splash" />
        <Stack.Screen name="src/(tabs)" />
      </Stack>
    </SafeAreaProvider>
  );
}
