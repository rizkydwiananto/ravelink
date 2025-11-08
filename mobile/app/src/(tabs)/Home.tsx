import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Categories, HeaderIndex, Places } from '../components';
import { Gap } from '../utils';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderIndex title="Rizky" />

        <Gap height={20} />

        <Categories />

        <Gap height={50} />

        <View style={styles.containerPopular}>
          <View style={styles.headerPopular}>
            <Text style={styles.labelPopular}>Popular</Text>
            <Text style={styles.seeMorePopular}>See More</Text>
          </View>

          <View style={styles.listPopular}>
            <Places />
            <Places />
            <Places />
          </View>
        </View>

        <Gap height={70} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F3F9F7' },
  containerPopular: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerPopular: { flexDirection: 'row', justifyContent: 'space-between' },
  labelPopular: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  seeMorePopular: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#0DA96E',
  },
  listPopular: { flex: 1, marginTop: 20, height: '100%' },
});
