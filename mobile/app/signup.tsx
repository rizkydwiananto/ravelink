import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from './src';
import Gap from './src/utils/gap';

const Signup = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const pickImage = async () => {
    // Minta izin akses galeri
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Izin akses galeri diperlukan untuk memilih foto!');
      return;
    }

    // Buka galeri
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1], // biar tetap persegi
      quality: 0.7,
    });

    // Jika pengguna memilih gambar
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar hidden={false} />
      <Header
        title="Sign Up"
        subTitle="Register and Travel"
        backButton={true}
        pages="/signin"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View>
          <TouchableOpacity style={styles.avatarWrapper} onPress={pickImage}>
            {avatar ? (
              <Image source={{ uri: avatar }} style={styles.avatarImage} />
            ) : (
              <View style={styles.avatar}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            )}
          </TouchableOpacity>

          <Gap height={16} />

          <TextInput labelText="Full Name" placeholder="Type your full name" />
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
          <Button
            label="Continue"
            replace={false}
            icon={true}
            pages="/SignupV"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 51,
    paddingVertical: 60,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    height: 110,
    width: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 55,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    height: 110,
    width: 110,
    borderRadius: 55,
    resizeMode: 'cover',
  },
  addPhoto: {
    textAlign: 'center',
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
});
