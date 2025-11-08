import { IC_Button_Like, IC_Star } from '@/assets/icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Places = () => {
  return (
    <TouchableOpacity
      style={{
        height: 148,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 20,
      }}
    >
      {/* gambar utama */}
      <Image
        source={require('../../../../assets/images/beachTheFree.png')}
        style={{
          width: '100%',
          position: 'absolute',
        }}
        resizeMode="cover"
      />

      {/* overlay gradient */}
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.48)', 'rgba(0,0,0,1)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />

      {/* harga di kanan atas */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          right: 0,
          paddingHorizontal: 11,
          paddingVertical: 4,
          backgroundColor: 'rgba(189, 200, 210, 0.7)',
          borderBottomLeftRadius: 15,
          borderTopRightRadius: 15,
          gap: 4,
        }}
      >
        <Text
          style={{ fontSize: 9, fontFamily: 'Poppins-SemiBold', color: '#fff' }}
        >
          $250
        </Text>
        <Text
          style={{ fontSize: 9, fontFamily: 'Poppins-Light', color: '#fff' }}
        >
          per pack
        </Text>
      </View>

      {/* konten bawah */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingBottom: 15,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-SemiBold',
              color: '#FFFFFF',
            }}
          >
            Beach The Free
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Poppins-Light',
              color: '#FFFFFF',
            }}
          >
            Bandung, Indonesia
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              paddingTop: 5,
            }}
          >
            <IC_Star />
            <Text
              style={{
                fontSize: 10,
                fontFamily: 'Poppins-Light',
                color: '#FFFFFF',
                lineHeight: 12,
              }}
            >
              4.9
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <IC_Button_Like />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Places;

const styles = StyleSheet.create({});
