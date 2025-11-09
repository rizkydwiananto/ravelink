import { IC_Beach, IC_Camp, IC_Countries, IC_Mountain } from '@/assets/icons';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Gap } from '../../utils';
import apiDummy from '../../utils/apiDummy.json';

type Category = {
  id: number;
  label: string;
  icon: string;
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const icons = {
    IC_Countries: IC_Countries,
    IC_Mountain: IC_Mountain,
    IC_Beach: IC_Beach,
    IC_Camp: IC_Camp,
  };

  useEffect(() => {
    // Simulasi loading biar ada efek spinner sebentar
    const timer = setTimeout(() => {
      setCategories(apiDummy.categories);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color="#0DA96E" />
        <Text style={styles.loaderText}>Loading Categories...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>

      <Gap height={20} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.contentScroll}>
          {categories.map((item, index) => {
            const IconComponent = icons[item.icon as keyof typeof icons];
            return (
              <React.Fragment key={item.id}>
                <TouchableOpacity style={styles.box}>
                  <View style={styles.icon}>
                    {IconComponent ? <IconComponent /> : null}
                  </View>

                  <Gap height={7} />

                  <Text style={styles.title}>{item.label}</Text>
                </TouchableOpacity>

                <Gap width={25} />
              </React.Fragment>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 24,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 24,
  },
  label: { fontSize: 16, fontFamily: 'Poppins-Medium' },
  seeMore: { fontSize: 12, fontFamily: 'Poppins-Regular', color: '#0DA96E' },
  box: {
    width: 127,
    height: 154,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#acacac',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1, // 12% opacity
    shadowRadius: 20,
    elevation: 5,
  },
  icon: {
    width: 81,
    height: 81,
    backgroundColor: '#ECF8F9',
    borderRadius: 81 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 13, fontFamily: 'Poppins-Medium' },
  contentScroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 24,
  },
  scrollView: { marginLeft: -24, paddingLeft: 24, paddingBottom: 24 },
  loaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  loaderText: {
    fontFamily: 'Poppins-Regular',
    color: '#555',
    marginLeft: 8,
  },
});
