import { IC_SignIn } from '@/assets/icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from './src';
import Gap from './src/utils/gap';

const signin = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar hidden={false} />
      <Header
        title="Sign In"
        subTitle="Find your best vacation ever"
        backButton={false}
        //pages="/pages/started"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: '#fff',
          paddingHorizontal: 51,
          paddingVertical: 60,
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <View>
          <View style={styles.icon}>
            <IC_SignIn />
          </View>

          <Gap height={16} />
          <TextInput
            labelText="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={16} />
          <TextInput labelText="Password" placeholder="Type your password" />
        </View>

        <Gap height={40} />

        <View>
          <Button label="Sign In" pages="/src/(tabs)/Home" replace={true} />
          <Gap height={20} />
          <TouchableOpacity
            style={styles.footer}
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.text}>
              Really <Text style={styles.link}>Have Account ?</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  icon: { alignItems: 'center' },
  footer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#0DA96E',
    fontFamily: 'Poppins-Bold',
  },
  link: {
    fontSize: 18,
    color: '#939394',
    fontFamily: 'Poppins-Medium',
  },
});
