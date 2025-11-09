import { IC_Button_Like, IC_Star } from '@/assets/icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type PlacesProps = {
  price?: number;
  title?: string;
  location?: string;
  rating?: number;
  image?: ImageSourcePropType | string;
};

const Places: React.FC<PlacesProps> = ({
  price,
  title,
  location,
  rating,
  image,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* gambar utama */}
      {image && (
        <Image
          source={typeof image === 'string' ? { uri: image } : image}
          style={{
            width: '100%',
            position: 'absolute',
          }}
          resizeMode="cover"
        />
      )}

      {/* overlay gradient */}
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.48)', 'rgba(0,0,0,1)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />

      {/* harga di kanan atas */}
      <View style={styles.containerPrice}>
        <Text style={styles.labelPrice}>${price}</Text>
        <Text style={styles.labelPricePack}>per pack</Text>
      </View>

      {/* konten bawah */}
      <View style={styles.containerPlace}>
        <View style={styles.viewPlace}>
          <Text style={styles.titlePlace}>{title}</Text>
          <Text style={styles.subTitlePlace}>{location}</Text>
          <View style={styles.bottomPlace}>
            <IC_Star />
            <Text style={styles.rattingPlace}>{rating}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bottonPlace}>
          <IC_Button_Like />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Places;

const styles = StyleSheet.create({
  container: {
    height: 148,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  containerPrice: {
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
  },
  labelPrice: { fontSize: 9, fontFamily: 'Poppins-SemiBold', color: '#fff' },
  labelPricePack: { fontSize: 9, fontFamily: 'Poppins-Light', color: '#fff' },
  containerPlace: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  viewPlace: { flex: 1 },
  titlePlace: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
  },
  subTitlePlace: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#FFFFFF',
  },
  bottomPlace: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingTop: 5,
  },
  rattingPlace: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    color: '#FFFFFF',
    lineHeight: 12,
  },
  bottonPlace: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
