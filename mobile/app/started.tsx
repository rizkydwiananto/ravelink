import { IC_Started } from '@/assets/icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from './src';
import Gap from './src/utils/gap';

const started = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <IC_Started />
        <Gap height={12} />
        <Text style={styles.title}>
          Let’s Find The Best Place For Your Vacation
        </Text>
        <Gap height={10} />
        <Text style={styles.description}>
          Vacation to all the destinations you like, only here
        </Text>
      </View>
      <Gap height={20} />
      <Button label="Start" pages="/signin" replace={true} />
    </SafeAreaView>
  );
};

export default started;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: { alignItems: 'center' },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    width: 309,
    height: 76,
  },
  description: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    width: 300,
    height: 54,
    color: '#939394',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0DA96E',
    height: 65,
    width: 270,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 19,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
});
