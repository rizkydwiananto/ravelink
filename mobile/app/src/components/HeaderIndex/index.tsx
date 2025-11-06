import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type HeaderIndexProps = {
  title?: string;
};

const HeaderIndex: React.FC<HeaderIndexProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          source={require('./../../../../assets/images/photo_profile.png')}
          style={styles.avatarImage}
        />
      </View>

      <View>
        <Text style={styles.title}>Hi, {title}!</Text>
        <Text style={styles.subTitle}>Where do you want to go ?</Text>
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
  title: { fontSize: 18, fontFamily: 'Poppins-Medium' },
  subTitle: { fontSize: 14, fontFamily: 'Poppins-Light', color: '#939394' },
});
