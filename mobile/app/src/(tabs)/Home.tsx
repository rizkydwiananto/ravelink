import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Categories, HeaderIndex, Places } from '../components';
import { Gap } from '../utils';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderIndex titleProfile="Rizky" profile={true} />

        <Gap height={20} />

        <Categories />

        <Gap height={26} />

        <View style={styles.containerPopular}>
          <View style={styles.headerPopular}>
            <Text style={styles.labelPopular}>Popular</Text>
            <TouchableOpacity>
              <Text style={styles.seeMorePopular}>See More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listPopular}>
            <Places
              price={290}
              title="Beautiful Place"
              location="Bali, Indonesia"
              rating={4.9}
              image={require('../../../assets/images/beachTheFree.png')}
            />
            <Places
              price={950}
              title="Mountain The Great Twins"
              location="Bogor, Indonesia"
              rating={4.5}
              image={require('../../../assets/images/mountainTheGreat.png')}
            />
            <Places
              price={320}
              title="Camp For Pramuka"
              location="Pati, Indonesia"
              rating={4.5}
              image={require('../../../assets/images/campPramuka.png')}
            />
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
