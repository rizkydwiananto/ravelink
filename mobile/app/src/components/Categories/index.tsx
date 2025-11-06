import { IC_Countries } from '@/assets/icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gap } from '../../utils';

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>

      <Gap height={20} />

      <View>
        <TouchableOpacity style={styles.box}>
          <View style={styles.icon}>
            <IC_Countries />
          </View>

          <Gap height={7} />

          <Text style={styles.title}>Countries</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <View style={styles.icon}>
            <IC_Countries />
          </View>

          <Gap height={7} />

          <Text style={styles.title}>Countries</Text>
        </TouchableOpacity>
      </View>
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
});
