import { IC_LogoSplash } from '@/assets/icons';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/started'); // pindah otomatis ke Home setelah 2 detik
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <IC_LogoSplash style={styles.logo} />
      <Text style={styles.textLogo}>r a v e L i n k</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007D4E',
  },
  logo: { marginBottom: 3 },
  textLogo: { fontSize: 25, fontFamily: 'Poppins-ExtraBold', color: '#FFFFFF' },
});
