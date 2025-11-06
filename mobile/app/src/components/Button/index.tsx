import { IC_ArrRight } from '@/assets/icons';
import { Href, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
  label?: string;
  pages?: Href;
  replace?: boolean;
  icon?: boolean;
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label = '',
  pages,
  replace = false,
  icon = false,
  onPress,
}) => {
  const handlePress = () => {
    if (!pages) {
      console.warn('Button tidak memiliki target "pages"');
      return;
    }

    if (replace) {
      router.replace(pages);
    } else {
      router.push(pages);
    }
  };

  const handleOnPress = () => {
    if (onPress) {
      onPress(); // ✅ kalau ada fungsi custom, jalankan
    } else if (pages) {
      if (replace) router.replace(pages);
      else router.push(pages);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.text}>{label}</Text>
      {icon && (
        <View style={styles.icon}>
          <IC_ArrRight />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0DA96E',
    padding: 18,
    borderRadius: 15,
    width: 270,
    //alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 19,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  icon: { position: 'absolute', right: 21, top: 21, bottom: 21 },
});
