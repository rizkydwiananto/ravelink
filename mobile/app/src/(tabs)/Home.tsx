import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Categories, HeaderIndex } from '../components';
import { Gap } from '../utils';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        hidden={false}
        translucent
        backgroundColor="transparent"
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} // auto theme
      />
      <HeaderIndex title="Rizky" />

      <Gap height={20} />

      <Categories />

      <Gap height={20} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F3F9F7' },
});
