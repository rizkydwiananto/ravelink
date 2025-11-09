import { IC_Back } from '@/assets/icons';
import { useNavigation } from '@react-navigation/native';
import { Href, router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HeaderIndexProps = {
  titleProfile?: string;
  title?: string;
  backButton?: boolean;
  profile?: boolean;
  pages?: Href;
};

const HeaderIndex: React.FC<HeaderIndexProps> = ({
  title,
  titleProfile,
  backButton,
  profile,
  pages,
}) => {
  const navigation = useNavigation() as any;

  const handleBack = () => {
    if (pages) {
      router.push(pages); // ke halaman tertentu
      return;
    }

    // Prefer navigating back in the navigation stack when available
    try {
      if (navigation && typeof navigation.canGoBack === 'function') {
        if (navigation.canGoBack()) {
          navigation.goBack();
          return;
        }
      }
    } catch {
      // ignore and fallback
    }

    // Fallback to a safe route when no back history exists
    router.replace('/src/(tabs)/Home');
  };

  return (
    <View style={styles.container}>
      {backButton && (
        <TouchableOpacity onPress={handleBack}>
          <IC_Back />
        </TouchableOpacity>
      )}

      {profile && (
        <>
          <View style={styles.avatar}>
            <Image
              source={require('./../../../../assets/images/photo_profile.png')}
              style={styles.avatarImage}
            />
          </View>

          <View>
            <Text style={styles.titleProfile}>Hi, {titleProfile}!</Text>
            <Text style={styles.subTitleProfile}>
              Where do you want to go ?
            </Text>
          </View>
        </>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderIndex;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 27,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  subTitle: { fontSize: 14, fontFamily: 'Poppins-Light' },
  avatar: {
    marginRight: 24,
    height: 54,
    width: 54,
    backgroundColor: '#F0F0F0',
    borderRadius: 54 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    // 🔥 Drop shadow (iOS + Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // x = 0, y = 4
    shadowOpacity: 0.25,
    shadowRadius: 4, // blur = 4
    elevation: 4, // Android
  },
  avatarImage: { height: 54, width: 54, borderRadius: 54 / 2 },
  titleProfile: { fontSize: 18, fontFamily: 'Poppins-Medium' },
  subTitleProfile: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#939394',
  },
});
