import { IC_Back } from '@/assets/icons';
import { useNavigation } from '@react-navigation/native';
import { Href, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title?: string;
  subTitle?: string;
  backButton?: boolean;
  pages?: Href;
};

const Header: React.FC<Props> = ({
  title,
  subTitle,
  backButton = true,
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
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFFFF9',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: { marginLeft: 26 },
  title: { fontSize: 22, fontFamily: 'Poppins-Medium' },
  subTitle: { fontSize: 14, fontFamily: 'Poppins-Light' },
});
